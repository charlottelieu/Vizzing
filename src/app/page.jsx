'use client';

import Link from "next/link";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    // ✅ Safe to access sessionStorage here
    const storedUser = sessionStorage.getItem('user');
    setUserSession(storedUser);

    if (!user && !storedUser) {
      router.push('/signup');
    }
  }, [user, router]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold" style={{ color: "#DABCFF" }}>
        Vizzing
      </h1>
      <p className="mt-2 text-3xl text-white">
        connect and create visualizations
      </p>

      <Link href="/signin">
        <button className="mt-12 rounded-2xl bg-purple-500 px-8 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-purple-600">
          SIGN IN
        </button>
      </Link>

      <div className="mt-4 flex items-center space-x-2 text-sm">
        <p className="text-gray-400">Don&apos;t have an account?</p>
        <Link
          href="/signup"
          className="font-semibold text-purple-400 hover:underline"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
}