"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ChooseFolderPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");

    if (t) {
      setToken(t);
    } else {
      setError("GitHub token not found. Please log in again.");
      setLoading(false);
    }
  }, []);

  // Fetch GitHub repos once token is available
  useEffect(() => {
    if (!token) return;

    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/user/repos", {
          headers: { Authorization: `token ${token}` },
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Failed to fetch repos.");
        }

        const data = await res.json();
        setRepos(data);
        console.log("Fetched repos:", data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [token]);

  if (loading)
    return <p className="p-6 text-gray-700 text-center">Loading your repositories...</p>;
  if (error)
    return <p className="p-6 text-red-500 text-center">{error}</p>;
  if (repos.length === 0)
    return <p className="p-6 text-gray-700 text-center">No repositories found for this account.</p>;

  return (
    <div 
     className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-12"
    style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Choose a repository to upload
      </h1>

      <ul className="space-y-3">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition"
           onClick={() =>
            router.push(
            `/create/getitems?repo=${repo.name}&owner=${repo.owner.login}&token=${token}`
  )
}

          >
            <p className="font-medium">{repo.name}</p>
            <p className="text-gray-500 text-sm">{repo.private ? "Private" : "Public"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
