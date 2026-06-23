'use client';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebase/config';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');           // ← new
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const db = getFirestore(app);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      
      // Save username to Firestore under the user's document  ← new
      if (res?.user) {
        await setDoc(doc(db, 'users', res.user.uid), {
          username: username,
          email: email,
          createdAt: new Date(),
        });
      }

      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Create Account</h1>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Username"                         // ← new input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSignUp}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;