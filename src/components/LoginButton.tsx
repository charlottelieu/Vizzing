"use client";

import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function LoginButton() {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/explore";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="text-2xl tracking-widest border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
    >
      SIGN IN
    </button>
  );
}