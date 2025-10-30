'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson44() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    const code = userCode.toLowerCase().replace(/\s/g, '');

    const hasColor = code.includes('color=') || code.includes('colour=');
    const hasLabels =
      code.includes('labs(') ||
      code.includes('xlab(') ||
      code.includes('ylab(') ||
      code.includes('ggtitle(');
    const hasGgplot = code.includes('ggplot(');

    if (hasColor && hasLabels && hasGgplot) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 4: Advanced Visualizations</h1>
        <h2 className="text-2xl font-semibold mb-3">4.4 Aesthetics and Labels</h2>

        <section>
          <p className="mb-3">
            In this lesson, you’ll learn how to make your visualizations more effective and visually appealing.
            This includes adding colors, customizing point sizes and shapes, and labeling your axes and titles properly.
          </p>
          <p className="mb-3">
            Remember, a great visualization is not just about showing data—it’s about telling a clear and engaging story.
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
          <p className="mb-3 font-semibold">1. Adding Color and Size</p>
          <p className="mb-3">
            You can map color and size to a variable to make patterns stand out. Here’s an example where each point’s color represents the opponent:
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS, color = Opponent, size = REB), alpha = 0.6)`}
            </code>
          </pre>

          <ul className="list-disc list-inside mb-3">
            <li><code>color = Opponent</code> gives each opponent a distinct color.</li>
            <li><code>size = REB</code> changes point size based on rebounds per game.</li>
            <li><code>alpha = 0.6</code> makes the points slightly transparent.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Customizing Titles and Axis Labels</p>
          <p className="mb-3">
            Always label your axes and add a descriptive title so viewers know exactly what the plot represents.
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS, color = Opponent)) +
  labs(
    title = "Michael Jordan: Points vs. Assists by Opponent",
    x = "Assists per Game (AST)",
    y = "Points per Game (PTS)",
    color = "Opponent"
  )`}
            </code>
          </pre>

          <ul className="list-disc list-inside mb-3">
            <li><code>title</code> adds an overall title to your plot.</li>
            <li><code>x</code> and <code>y</code> label your axes.</li>
            <li><code>color</code> changes the legend title.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Changing Themes</p>
          <p className="mb-3">
            ggplot2 includes built-in themes to control the overall look of your plots:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS, color = Opponent)) +
  labs(title = "Points vs. Assists") +
  theme_minimal()`}
            </code>
          </pre>

          <ul className="list-disc list-inside mb-3">
            <li><code>theme_minimal()</code> gives a clean, modern look.</li>
            <li><code>theme_classic()</code> and <code>theme_light()</code> are also popular choices.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <p className="mb-3">
            Do these exercises in RStudio, then copy your code below so the app can check if you’re correct.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Create a scatterplot of <code>PTS</code> vs. <code>AST</code> colored by <code>Opponent</code>.</li>
            <li>Add proper labels for the x-axis, y-axis, and a descriptive title.</li>
            <li>Use a theme of your choice to change the appearance.</li>
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
              Awesome! You’ve completed Lesson 4.4!
            </p>
          )}
          {result === 'incorrect' && (
            <p className="mt-8 font-semibold text-center text-red-600">
              ❌ Try again! Make sure to include both color and labels in your ggplot.
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
          <Link href="/course/unit4/final">
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
