'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Unit4Final() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    const code = userCode.toLowerCase().replace(/\s/g, '');

    const hasPackage =
      code.includes('library(nflfastR)') || code.includes('install.packages("nflfastR")');
    const hasDataset = code.includes('pbp_2022') || code.includes('load_pbp');
    const hasGroupBy = code.includes('group_by(');
    const hasSummarize = code.includes('summarize(') || code.includes('reframe(');
    const hasGgplot = code.includes('ggplot(');
    const hasAes = code.includes('aes(');
    const hasGeomPoint = code.includes('geom_point(');
    const hasGeomSmooth = code.includes('geom_smooth(');
    const hasFacet = code.includes('facet_wrap(') || code.includes('facet_grid(');
    const hasLabs = code.includes('labs(');

    if (
      hasPackage &&
      hasDataset &&
      hasGroupBy &&
      hasSummarize &&
      hasGgplot &&
      hasAes &&
      hasGeomPoint &&
      hasGeomSmooth &&
      hasFacet &&
      hasLabs
    ) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🏈 Unit 4 Final Test: NFL Play Analysis Case Study
        </h1>

        <section>
          <p className="mb-3">
            Congratulations on finishing Unit 4! For your final project, you’ll work with the <strong>nflfastR</strong> play-by-play data for the 2022 season.
          </p>
          <p className="mb-3">
            Your task is to explore, summarize, and visualize the data using all the tools you’ve learned in Unit 4.
            You will create grouped summaries, scatterplots with regression lines, facet plots, and use proper aesthetics.
          </p>
          <p className="mb-3">
            Load the required packages and dataset:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`library(tidyverse)
library(nflfastR)

pbp_2022 <- load_pbp(2022)`}
            </code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 1: Summarize the Data</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Group by <code>posteam</code> (team with the ball) and <code>down</code>.</li>
            <li>Calculate the average <code>yards_gained</code> and number of plays per group.</li>
            <li>Store the result in a new dataframe called <code>team_summary</code>.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 2: Scatterplot with Regression</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Create a scatterplot of <code>avg_yards</code> vs. <code>plays</code> from <code>team_summary</code>.</li>
            <li>Add a linear regression line using <code>geom_smooth(method = "lm")</code>.</li>
            <li>Make points slightly transparent (<code>alpha = 0.5</code>) and color by <code>posteam</code>.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 3: Faceting</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Facet the scatterplot by <code>down</code> using <code>facet_wrap(~down)</code>.</li>
            <li>Ensure each panel shows only the plays for that down.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <h2 className="text-xl font-semibold mb-2">Part 4: Aesthetics and Labels</h2>
          <ul className="list-disc list-inside mb-3">
            <li>Add a title: <code>"Average Yards vs Number of Plays by Team"</code></li>
            <li>Label the x-axis: <code>"Number of Plays"</code></li>
            <li>Label the y-axis: <code>"Average Yards Gained"</code></li>
            <li>Use a theme of your choice (e.g., <code>theme_minimal()</code>).</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Part 5: Final Submission</p>
          <ul className="list-disc list-inside mb-3">
            <li>Combine everything: grouped summary, scatterplot with regression line, faceting, color by team, and proper labels/themes.</li>
            <li>Paste your full code into the textbox below when done.</li>
          </ul>

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
              🏈 Congrats! You’ve completed the Unit 4 Final Case Study!
            </p>
          )}
          {result === 'incorrect' && (
            <p className="mt-8 font-semibold text-center text-red-600">
              ❌ Try again! Make sure you include grouping, scatterplot, regression line, faceting, color, and labels.
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
          <div className="h-40"></div>
        </div>
      </div>
    </div>
  );
}
