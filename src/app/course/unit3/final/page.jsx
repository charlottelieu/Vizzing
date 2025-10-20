'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson33() {
  const [userCode, setUserCode] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    if (userCode.trim().toLowerCase() === 'answer key') {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">In Construction</div>
  )
}
