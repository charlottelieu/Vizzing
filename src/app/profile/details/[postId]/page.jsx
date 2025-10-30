"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import { app } from "src/app/firebase/config";
import { Icon } from "@iconify/react";
import heartOutline from "@iconify-icons/mdi/heart-outline";

export default function PostDetails() {
  const router = useRouter();
  const { postId } = useParams();

  const auth = getAuth(app);
  const db = getFirestore(app);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    if (!postId || !auth.currentUser) return;

    const fetchPost = async () => {
      const postRef = doc(db, "users", auth.currentUser.uid, "posts", postId);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        setPost({ id: postSnap.id, ...postSnap.data() });
        setLiked(false);
      }

      setLoading(false);
    };

    fetchPost();
  }, [postId, auth.currentUser]);

  useEffect(() => {
    if (!postId || !auth.currentUser) return;

    const commentsRef = collection(
      db,
      "users",
      auth.currentUser.uid,
      "posts",
      postId,
      "comments"
    );
    const q = query(commentsRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [postId, auth.currentUser]);

 const handleLike = async () => {
  if (!post) return;
  const user = auth.currentUser;
  if (!user) return;

  const postRef = doc(db, "users", user.uid, "posts", postId);

  try {
    await updateDoc(postRef, {
      likes: (post.likes || 0) + (liked ? -1 : 1),
    });

    setPost((prev) => ({
      ...prev,
      likes: (prev.likes || 0) + (liked ? -1 : 1),
    }));
    setLiked(!liked);
  } catch (error) {
    console.error("Error updating likes:", error);
  }
};

  const handleDelete = async () => {
    if (!confirm("Delete this post?")) return;
    await deleteDoc(doc(db, "users", auth.currentUser.uid, "posts", postId));
    router.push("/profile");
  };

  const handleComment = async () => {
    if (!commentInput.trim()) return;
    const commentsRef = collection(
      db,
      "users",
      auth.currentUser.uid,
      "posts",
      postId,
      "comments"
    );
    await addDoc(commentsRef, {
      text: commentInput.trim(),
      createdAt: new Date(),
      user: "charlottelieu",
    });
    setCommentInput("");
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!post) return <p className="text-center py-10 text-red-500">Post not found.</p>;

  return (
    <div className="min-h-screen flex justify-center items-start py-10 px-4 bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">

        <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
          <img
            src={post.imageUrl}
            alt="Post visualization"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/3 p-4 flex flex-col justify-between">

          <div>
            <p className="text-gray-800 mb-2">{post.caption}</p>

            <div className="flex items-center space-x-6 mb-4">
      
              <button
                onClick={handleLike}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <Icon
                  icon={liked ? "noto-v1:heart-suit" : "material-symbols:favorite-outline"}
                  width="28"
                  height="28"
                  className={liked ? "" : "text-black"}
                />
                <span className="text-black font-medium">{post?.likes ?? 0}</span>
              </button>

       
              <div className="flex items-center space-x-2 text-2xl text-gray-500">
                <Icon icon="iconamoon:comment-bold" className="w-6 h-6" />
                <span className="text-black text-base">{comments.length || 0}</span>
              </div>
            </div>


            <div className="max-h-64 overflow-y-auto mb-4 border-t border-gray-200 pt-2">
              {comments.length === 0 ? (
                <p className="text-gray-400 text-sm">No comments yet</p>
              ) : (
                comments.map((c) => (
                  <div key={c.id} className="mb-2 text-black">
                    <span className="font-semibold">{c.user}: </span>
                    <span>{c.text}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex gap-2 mt-auto">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleComment()}
              placeholder="Add a comment..."
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
            />

            <button
              onClick={() => router.push("/profile")}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Back
            </button>
          </div>

          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-600 font-medium mt-4"
          >
            Delete Post
          </button>

        </div>
      </div>
    </div>
  );
}
