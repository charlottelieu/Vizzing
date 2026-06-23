"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "src/app/firebase/config";

export default function FeedPage() {
  const [tab, setTab] = useState("foryou");
  const [posts, setPosts] = useState([]);
  const auth = getAuth(app);
  const db = getFirestore(app);
  useEffect(() => {}, []);
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Feed</h1>

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

			<h1>Coming Soon!</h1>
      </div>
    </div>
  );
}
