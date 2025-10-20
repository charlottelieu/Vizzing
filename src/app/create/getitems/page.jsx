"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RepoFilesPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [repo, setRepo] = useState(null);
  const [owner, setOwner] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");
    const r = params.get("repo");
    const o = params.get("owner");

    if (!t || !r || !o) {
      setError("Missing repo info or GitHub token. Please go back and select a repository.");
      setLoading(false);
      return;
    }

    setToken(t);
    setRepo(r);
    setOwner(o);
  }, []);

  useEffect(() => {
    if (!token || !repo || !owner) return;

    const fetchFiles = async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/`, {
          headers: { Authorization: `token ${token}` },
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Failed to fetch repo contents.");
        }

        const data = await res.json();
        const images = data.filter(
          (file) => file.type === "file" && /\.(png|jpg|jpeg|gif)$/i.test(file.name)
        );

        setFiles(images);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [token, repo, owner]);

  if (loading) return <p className="p-6 text-gray-700 text-center">Loading files...</p>;
  if (error) return <p className="p-6 text-red-500 text-center">{error}</p>;
  if (files.length === 0)
    return <p className="p-6 text-gray-700 text-center">No images found in this repository.</p>;

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-12">
      <h1 className="text-2xl font-semibold mb-6 text-center">Images in {repo}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {files.map((file) => (
          <div
            key={file.sha}
            className="border rounded-lg p-2 hover:shadow-lg transition cursor-pointer"
            onClick={() =>
              router.push(
                `/create/post?imageUrl=${encodeURIComponent(
                  file.download_url
                )}&repo=${repo}&owner=${owner}`
              )
            }
          >
            <img src={file.download_url} alt={file.name} className="w-full h-48 object-contain" />
            <p className="text-center mt-2 text-sm">{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
