"use client";
import { useState } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "src/app/firebase/config";

export default function UploadFromGitHub() {
  const auth = getAuth(app);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGitHubLogin = async () => {
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      // Set up GitHub provider with correct scope
      const provider = new GithubAuthProvider();
      provider.addScope("repo"); // full access to public + private repos
      provider.setCustomParameters({ allow_signup: "true" });

      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      console.log("Logged in as:", user.displayName);
      console.log("GitHub Token:", token);

      if (!token) {
        setError("Failed to get GitHub token. Make sure you allowed repo access.");
        setLoading(false);
        return;
      }

      // Redirect to choose-folder page with token in URL
      router.push(`/create/connect?token=${token}`);

    } catch (err) {
      if (err.code === "auth/cancelled-popup-request") {
        // ignore multiple popups
      } else if (err.code === "auth/account-exists-with-different-credential") {
        const pendingCred = GithubAuthProvider.credentialFromError(err);
        const email = err.customData.email;

        setError(
          `An account with the email ${email} already exists using a different sign-in method. Please log in with that method first, then link your GitHub account.`
        );
        console.warn("Account exists with different credential:", err);
      } else {
        setError(err.message);
        console.error("GitHub login failed:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
   <div 
     className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-12"
    style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 className="text-3xl font-semibold text-center mb-12">
        Upload from GitHub
      </h1>

      <div className="border rounded-2xl p-6 max-w-2xl mx-auto mb-8">
        <h2 className="font-semibold text-center mb-6">
          Connect Your GitHub Account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Connect to easily browse and import your R visualization repositories
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleGitHubLogin}
            disabled={loading}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            ></svg>
            <span>{loading ? "Connecting..." : "Connect GitHub Account"}</span>
          </button>
        </div>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>

      <div className="border rounded-2xl p-6 max-w-2xl mx-auto">
        <h2 className="font-semibold mb-3">Import from URL</h2>
        <input
          type="text"
          placeholder="https://github.com/username/repository"
          className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg w-full font-medium">
          Import Repository
        </button>
      </div>
    </div>
  );
}
