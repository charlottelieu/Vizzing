"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "src/app/firebase/config";

export default function Feed() {
  const [tab, setTab] = useState("foryou");
  const [forYouPosts, setForYouPosts] = useState([]);
  const [followingPosts, setFollowingPosts] = useState([
    {
      id: "3",
      user: "charlotte_other",
      caption: "testing",
      imageUrl: "/images/image3.png",
      likes: 0,
      comments: 0,
    },
  ]);

  const auth = getAuth(app);
  const db = getFirestore(app);

  const demoForYou = [
    {
      id: "1",
      user: "user_123",
      caption: "First Post",
      imageUrl: "/images/image1.png",
      likes: 0,
      comments: 0,
    },
    {
      id: "2",
      user: "user_567",
      caption: "amazing caption",
      imageUrl: "/images/image2.png",
      likes: 0,
      comments: 0,
    },
  ];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = [...demoForYou];

        const usersRef = collection(db, "users");
        const usersSnap = await getDocs(usersRef);

        for (const userDoc of usersSnap.docs) {
          const postsRef = collection(db, "users", userDoc.id, "posts");
          const postsSnap = await getDocs(postsRef);

          postsSnap.forEach((post) =>
            allPosts.push({
              id: post.id,
              user: userDoc.id,
              ...post.data(),
            })
          );
        }

        // Sort newest first
        allPosts.sort(
          (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
        );

        setForYouPosts(allPosts);
      } catch (err) {
        console.error("Error loading posts:", err);
      }
    };

    loadPosts();
  }, []);

  const postsToShow = tab === "foryou" ? forYouPosts : followingPosts;

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Feed</h1>

      {/* Tabs */}
      <div className="flex space-x-6 mb-8">
        <button
          onClick={() => setTab("foryou")}
          className={`text-lg font-semibold ${
            tab === "foryou"
              ? "text-purple-700 border-b-2 border-purple-700"
              : "text-gray-500"
          }`}
        >
          For You
        </button>
        <button
          onClick={() => setTab("following")}
          className={`text-lg font-semibold ${
            tab === "following"
              ? "text-purple-700 border-b-2 border-purple-700"
              : "text-gray-500"
          }`}
        >
          Following
        </button>
      </div>

      <div className="w-full flex flex-col items-center space-y-16">

        {postsToShow.map((post) => (
         <div
           key={post.id}
           className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 h-[800px] w-[1200px]">
            <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
              <img
                src={post.imageUrl}
                alt="Feed post"
                className="object-contain w-full h-full"
              />
            </div>

            <div className="w-full md:w-1/3 p-4 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  @{post.user}
                </p>
                <p className="text-gray-700 mb-3">{post.caption || "No caption"}</p>

                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-2xl text-red-500">
                    <Icon icon="charm:heart" className="w-6 h-6" />
                    <span className="text-gray-800 text-base">{post.likes || 0}</span>
                  </button>

                  <Link
                    href={`/details/${post.id}`}
                    className="flex items-center space-x-2 text-2xl text-gray-500 hover:text-purple-600"
                  >
                    <Icon icon="iconamoon:comment-bold" className="w-6 h-6" />
                    <span className="text-gray-800 text-base">{post.comments || 0}</span>
                  </Link>
                </div>
              </div>

              <Link
                href={`/details/${post.id}`}
                className="mt-4 text-purple-600 hover:underline font-medium"
              >
                View Post →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
