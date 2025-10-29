'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Unit3Final() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    const code = userCode.toLowerCase().replace(/\s/g, '');

    const hasPackage = code.includes('library(ggplot2)') || code.includes('library(tidyverse)');
    const hasDataset = code.includes('mtcars') && code.includes('<-') || code.includes('data(mtcars)');
    const hasHead = code.includes('head(');
    const hasStr = code.includes('str(');
    const hasSummary = code.includes('summary(');

    const hasHist = code.includes('geom_histogram') && code.includes('mpg');
    const hasScatter = code.includes('geom_point') && code.includes('wt') && code.includes('mpg');
    const hasFilter = code.includes('filter(') && code.includes('mpg>20');
    const hasMutate = code.includes('mutate(') && code.includes('Efficiency');
    const hasGroup = code.includes('group_by') && code.includes('Efficiency');
    const hasReframe = code.includes('reframe(');

    if (
      hasPackage &&
      hasDataset &&
      hasHead &&
      hasStr &&
      hasSummary &&
      hasHist &&
      hasScatter &&
      hasFilter &&
      hasMutate &&
      hasGroup &&
      hasReframe
    ) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-gray-900 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          🚗 Unit 3 Final Test: Cars Case Study
        </h1>

        <section>
          <p className="mb-3">
            Congratulations on completing Unit 3! For your final project, you’ll work with the <strong>mtcars</strong> dataset.
            Your task is to explore, visualize, filter, and summarize the dataset using the tools you learned in this unit.
          </p>
          <p className="mb-3">
            Follow the steps below in order. When you finish, copy your final code into the textbox to submit your work.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 1: Setup</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Install and load the <code>ggplot2</code> and <code>tidyverse</code> packages.</li>
            <li>Load the <code>mtcars</code> dataset.</li>
            <li>Use <code>head()</code>, <code>str()</code>, and <code>summary()</code> to inspect the dataset.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 2: Plotting</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Create a histogram showing the distribution of <code>mpg</code> with 10 bins.</li>
            <li>Create a scatterplot showing <code>mpg</code> vs. <code>wt</code>, and add transparency <code>alpha = 0.3</code>.</li>
            <li>Create a scatterplot with only cars having <code>mpg &lt; 25</code> and <code>wt &lt; 4</code> using <code>alpha = 0.4</code>.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 3: Filtering</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Filter for cars with <code>mpg &gt; 20</code>.</li>
            <li>Filter for cars with <code>hp &gt; 150</code> and <code>cyl == 6</code>.</li>
            <li>Filter for cars that are not automatic (<code>am != 1</code>).</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 4: Categorical Variables and Summaries</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Create a new variable called <code>Efficiency</code> using <code>case_when()</code> with:
              <ul className="list-disc list-inside ml-6">
                <li><code>mpg &lt; 20 → "Low"</code></li>
                <li><code>mpg &gt;= 20 & mpg &lt; 30 → "Moderate"</code></li>
                <li><code>mpg &gt;= 30 → "High"</code></li>
              </ul>
            </li>
            <li>Select only the columns: <code>mpg</code>, <code>hp</code>, <code>wt</code>, and <code>Efficiency</code>.</li>
            <li>Summarize average <code>hp</code> and <code>wt</code> for each <code>Efficiency</code> level using <code>group_by()</code> and <code>reframe()</code>.</li>
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
              🎉 Congrats! You’ve completed the Unit 3 Final Test!
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
          <Link href="/course/unit3/lesson4">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 3.4
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
