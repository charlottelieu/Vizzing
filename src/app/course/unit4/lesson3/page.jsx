'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson43() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    const code = userCode.toLowerCase().replace(/\s/g, '');

    const hasFacet = code.includes('facet_wrap') || code.includes('facet_grid');
    const hasGeomPoint = code.includes('geom_point') && code.includes('ggplot');

    if (hasFacet && hasGeomPoint) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 4: Advanced Visualizations</h1>
        <h2 className="text-2xl font-semibold mb-3">4.3 Faceting</h2>

        <section>
          <p className="mb-3">
            When you want to compare the same relationship across different categories, faceting is a powerful visualization tool.
          </p>
          <p className="mb-3">
            Facets split your data into multiple panels based on one or more categorical variables.
          </p>
          <p className="mb-3">
            We’ll continue using <code>mj_shots</code>, Michael Jordan’s game data. Let’s say we want to compare how his scoring and assists varied by season or opponent.
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`library(tidyverse)
mj_shots <- read_csv("michael-jordan-nba-career-regular-season-stats-by-game.csv")`}
            </code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">1. What Is Faceting?</p>
          <p className="mb-3">
            Faceting lets us create a separate plot for each category in a variable — for example, plotting one scatterplot per season.
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS)) +
  facet_wrap(~ Season)`}
            </code>
          </pre>

          <ul className="list-disc list-inside mb-3">
            <li><code>facet_wrap(~ Season)</code> creates a grid of plots — one for each unique Season value.</li>
            <li>The tilde (<code>~</code>) means "split by this variable."</li>
            <li>Each subplot shows the same relationship (AST vs. PTS), but filtered to that season.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Using facet_grid()</p>
          <p className="mb-3">
            <code>facet_grid()</code> lets you facet across two categorical variables — one for rows and one for columns.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS), alpha = 0.4) +
  facet_grid(Team ~ Opponent)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li>This creates a grid of plots organized by both <code>Team</code> (rows) and <code>Opponent</code> (columns).</li>
            <li>Faceting is especially helpful when comparing trends across groups.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Customizing Facets</p>
          <p className="mb-3">
            You can control the layout using arguments like <code>ncol</code> or <code>nrow</code> in <code>facet_wrap()</code>.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS), alpha = 0.3) +
  facet_wrap(~ Opponent, ncol = 4)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li><code>ncol = 4</code> arranges the facets in four columns.</li>
            <li>You can also filter the data before faceting to avoid too many small plots.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <p className="mb-3">
            Try these exercises in RStudio. When you’re done, paste your code below to check your work.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Create a scatterplot of <code>PTS</code> vs. <code>AST</code>.</li>
            <li>Use <code>facet_wrap()</code> to split by <code>Opponent</code>.</li>
            <li>Make the points slightly transparent with <code>alpha = 0.3</code>.</li>
          </ul>

          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Write your R code here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-40 mt-4 mb-4"
          />

          <button
            onClick={checkAnswer}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition"
          >
            Check Answer
          </button>

          {result === 'correct' && (
            <p className="mt-8 font-semibold text-center text-green-600">
              🎉 Great job! You’ve completed Lesson 4.3!
            </p>
          )}
          {result === 'incorrect' && (
            <p className="mt-8 font-semibold text-center text-red-600">
              ❌ Try again! Make sure your plot includes both <code>geom_point()</code> and <code>facet_wrap()</code>.
            </p>
          )}
        </section>

        <hr className="my-6 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course/unit4/lesson2">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 4.2
            </button>
          </Link>
          <Link href="/course/unit4/lesson4">
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
