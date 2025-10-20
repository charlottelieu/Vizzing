'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Unit2Final() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    if (userCode.trim().toLowerCase() === 'answer key') {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-gray-900 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          🐧 Unit 2 Final Test: Penguins Case Study
        </h1>

        <section>
          <p className="mb-3">
            Congratulations on finishing Unit 2! For your final project, you’ll work with the <strong>Palmer Penguins</strong> dataset. 
            Your task is to explore and analyze the dataset using only the tools you’ve learned so far.
          </p>

          <p className="mb-3">
            Follow the steps below in order. When you finish, copy your final code into the textbox to submit your work.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 1: Setup</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Install and load the <code>palmerpenguins</code> package.</li>
            <li>Load the <code>penguins</code> dataset.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 2: First Look at the Data</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Use <code>head()</code> to view the first 8 rows.</li>
            <li>Use <code>str()</code> to see the structure of the dataset.</li>
            <li>Use <code>summary()</code> to get an overview of the numeric columns.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 3: Explore the Columns</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Access the <code>bill_length_mm</code> column and calculate the mean.</li>
            <li>Access the <code>flipper_length_mm</code> column and calculate the maximum value.</li>
            <li>Access the <code>body_mass_g</code> column and calculate the minimum value.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 4: Data Wrangling</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Arrange the dataset so that the penguins with the largest body mass appear at the top.</li>
            <li>Create a new column called <code>bill_flipper_ratio</code> which is the bill length mm divided by the flipper length mm.</li>
            <li>Arrange the dataset so that the smallest ratio is at the top.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 5: Final Task</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Arrange the data to find the penguin with the largest body mass.</li>
            <li>Arrange the data to find the penguin with the smallest <code>bill_flipper_ratio</code>.</li>
            <li>This is your final submission for Unit 2. Paste your full code into the textbox when you’re done.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Write your R code here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-64 mt-4 mb-4"
          />

          <button
            onClick={checkAnswer}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition"
          >
            Check Answer
          </button>

          {result === 'correct' && (
            <p className="mt-8 font-semibold text-center text-green-600">
              🎉 Congrats! You’ve completed the Unit 2 Final Test!
            </p>
          )}
          {result === 'incorrect' && (
            <p className="mt-8 font-semibold text-center text-red-600">
              ❌ Try again!
            </p>
          )}
        </section>

        <hr className="my-6 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course/unit2/lesson4">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 2.4
            </button>
          </Link>
          <Link href="/course">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              Back to Course →
            </button>
          </Link>
          <div className="h-40"></div>
        </div>
      </div>
    </div>
  );
}
