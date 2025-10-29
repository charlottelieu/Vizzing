'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson31() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');
  const [userResponse, setUserResponse] = useState('');

  const checkAnswer = () => {
  const code = userCode.toLowerCase().replace(/\s/g, '');

  const hasASTHist = code.includes('hist(') && code.includes('ast') && code.includes('breaks=10');
  const hasMPHist = code.includes('hist(') && code.includes('mp') && code.includes('binwidth=5');
  const hasSTLHist = code.includes('hist(') && code.includes('stl') && code.includes('breaks=20');

  if (hasASTHist && hasMPHist && hasSTLHist) {
    setResult('correct');
  } else {
    setResult('incorrect');
  }
};

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 3: Plot Plot Plot</h1>
        <h2 className="text-2xl font-semibold mb-3">3.1 Histograms</h2>

        <section>
          <p className="mb-3">
            Download this CSV: <a href="https://sports-statistics.com/database/basketball-data/nba/michael-jordan-nba-career-regular-season-stats-by-game.csv" className="text-blue-600 underline">Michael Jordan Career Regular Season Statistics by Game(csv)</a>.
          </p>
          <p className="mb-3">Let’s call this mj_data</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>mj_data &lt;- read_csv("michael-jordan-nba-career-regular-season-stats-by-game.csv")</code>
          </pre>
          <p className="mb-3">Let’s load in our packages:</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`library(tidyverse)
library(ggplot2)`}
            </code>
          </pre>
          <p className="mb-3">
            Visualizations are a powerful way to understand your data. We will use graphs to answer questions about distributions of individual variables as well as relationships between pairs of variables.
          </p>
          <p className="mb-3">
            Throughout this course, we will use ggplot2, a package within the tidyverse. At a high level, ggplot2 works by layering graphics, adding different features on top of one another.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">1. Creating a Histogram</p>
          <p className="mb-3">
            Histograms are great for visualizing the distribution of a single variable.
          </p>
          <p className="mb-3">Here’s an example of how to create one with a generic dataset:</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = my_data) +
  geom_histogram(mapping = aes(x = column_name), bins = 5)`}
            </code>
          </pre>
          <p className="mb-3">ggplot(data = my_data) tells R which dataset to use.</p>
          <p className="mb-3">
            geom_histogram(mapping = aes(x = column_name), bins = 5) adds the actual histogram layer. Let’s look deeper into this
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>mapping = aes(x = column_name) tells ggplot which variable goes on the x-axis.</li>
            <li>aes() stands for aesthetics: it maps your data to visual properties like position, color, and size</li>
            <li>bins argument determines how many bins the data is split into.</li>
            <li>A bin is a range of values that groups observations; each bin counts how many observations fall into that range.</li>
          </ul>
          
        </section>
<hr className="my-6 border-gray-300" />
        <section>
          <p className="mb-3 font-semibold">2. Using Our Data</p>
          <p className="mb-3">
            With the dataset we have, we can make our own histogram to see Michael Jordan’s performance in games. For example, let’s look at points scored per game (PTS):
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_data) +
  geom_histogram(mapping = aes(x = PTS), bins = 10)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li>Here, x = PTS puts points scored on the x-axis.</li>
            <li>y automatically counts how many games fall into each points range.</li>
            <li>bins = 10 divides the points into 10 intervals.</li>
            <li>We can increase the resolution by using more bins:</li>
          </ul>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = my_data) +
  geom_histogram(mapping = aes(x = PTS), bins = 50)`}
            </code>
          </pre>

        </section>
<hr className="my-6 border-gray-300" />
        <section>
          <p className="mb-3 font-semibold">3. Binwidth</p>
          <p className="mb-3">
            Instead of specifying the number of bins, we can define the width of each bin:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = my_data) +
  geom_histogram(mapping = aes(x = PTS), binwidth = 5)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li>Using binwidth gives us precise control over how wide each interval is.</li>
            <li>Smaller binwidth → more detailed view, may show subtle patterns</li>
            <li>Larger binwidth → simpler view, easier to see overall trends</li>
          </ul>

        </section>
<hr className="my-6 border-gray-300" />
        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <p className="mb-3">
            Do these exercises in RStudio. Once you have your answers, write them in the textbox below so the app can check if you are correct.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Create a histogram showing the distribution of assists (AST) per game. Use 10 bins.</li>
            <li>Create a histogram for minutes played (MP) per game with a binwidth of 5.</li>
            <li>Create a histogram of points scored (STL) per game with 20 bins.</li>
          </ul>
          <p className="mb-3 font-semibold">Questions:</p>
          <ul className="list-disc list-inside mb-3">
            <li>Which range of points did Michael Jordan score most frequently?</li>
            <li>How many games did he score more than 30 points?</li>
          </ul>

          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Write your R code here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-40 mt-4 mb-4"
          />

          <textarea
            value={userResponse}
            onChange={(e) => setUserResponse(e.target.value)}
            placeholder="Write your answers to the questions here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-24 mt-2 mb-4"
          />

          <button
            onClick={checkAnswer}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition"
          >
            Check Answer
          </button>

          {result === 'correct' && (
            <p className="mt-8 font-semibold text-center text-green-600">
              🎉 Congrats on completing lesson 3.1!
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
          <Link href="/course">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to Course
            </button>
          </Link>
          <Link href="/course/unit3/lesson2">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              Next Lesson →
            </button>
          </Link>
          <div className="h-40"></div>
        </div>
      </div>
    </div>
  );
}
