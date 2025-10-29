"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from "src/app/firebase/config";

export default function PostPage() {
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState("");
  const [repo, setRepo] = useState("");
  const [owner, setOwner] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const url = params.get("imageUrl");
    const r = params.get("repo");
    const o = params.get("owner");

    if (!url || !r || !o) {
      setError("Missing image or repo info. Please go back and select an image.");
      return;
    }

    setImageUrl(decodeURIComponent(url));
    setRepo(r);
    setOwner(o);
    setRepoLink(`https://github.com/${o}/${r}`);
  }, []);

  const handlePost = async () => {
    if (!auth.currentUser) {
      setError("You must be logged in to post.");
      return;
    }
    if (!imageUrl) {
      setError("No image selected.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const postsRef = collection(db, "users", auth.currentUser.uid, "posts");
      await addDoc(postsRef, {
        imageUrl,
        caption,
        repoLink,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setTimeout(() => router.push("/profile"), 1000);
    } catch (err) {
      console.error(err);
      setError("Failed to post. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p className="p-6 text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-6 sm:px-12">
      <h1 className="text-2xl font-semibold mb-6 text-center">Post your visualization</h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Selected visualization"
          className="w-full max-w-3xl h-auto object-contain mb-6 rounded-lg shadow-md"
        />
      )}

      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Add a caption..."
        className="w-full max-w-3xl border rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        type="text"
        value={repoLink}
        onChange={(e) => setRepoLink(e.target.value)}
        placeholder="Link to GitHub repository"
        className="w-full max-w-3xl border rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      {!success && (
        <button
          onClick={handlePost}
          disabled={loading}
          className="w-full max-w-3xl bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          {loading ? "Posted!" : "Post"}
        </button>
      )}
    </div>
  );
}
