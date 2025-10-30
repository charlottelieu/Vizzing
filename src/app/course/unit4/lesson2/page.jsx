'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson42() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    const code = userCode.toLowerCase().replace(/\s/g, '');

    const hasPTSvsAST = code.includes('ggplot') && code.includes('pts') && code.includes('ast') && code.includes('geom_point');
    const hasSmooth = code.includes('geom_smooth') && code.includes('method="lm"');

    if (hasPTSvsAST && hasSmooth) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 4: Advanced Visualizations</h1>
        <h2 className="text-2xl font-semibold mb-3">4.2 Scatterplots & Regression Lines</h2>

        <section>
          <p className="mb-3">
            In the last lesson, we learned how to summarize data using grouping and aggregation. Now, we’ll visualize how two numerical variables relate to each other using scatterplots.
          </p>
          <p className="mb-3">
            We’ll continue using the <code>mj_shots</code> dataset, which contains game-by-game stats for Michael Jordan.
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`library(tidyverse)
mj_shots <- read_csv("michael-jordan-nba-career-regular-season-stats-by-game.csv")`}
            </code>
          </pre>

          <p className="mb-3">
            Scatterplots show how two numerical variables are related — for example, do more assists correspond to more points scored?
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">1. Creating a Basic Scatterplot</p>
          <p className="mb-3">
            The <code>geom_point()</code> function is used to create scatterplots in ggplot2.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS))`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li><code>x = AST</code> places assists on the x-axis.</li>
            <li><code>y = PTS</code> places points on the y-axis.</li>
            <li>Each point represents one game.</li>
          </ul>
          <p className="mb-3">
            You can make the points slightly transparent to better see overlapping data:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS), alpha = 0.3)`}
            </code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Adding a Regression Line</p>
          <p className="mb-3">
            To better understand the trend in the relationship, we can add a regression line using <code>geom_smooth(method = "lm")</code>.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_shots) +
  geom_point(mapping = aes(x = AST, y = PTS), alpha = 0.3) +
  geom_smooth(mapping = aes(x = AST, y = PTS), method = "lm", se = FALSE)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li><code>method = "lm"</code> fits a linear regression line (lm = linear model).</li>
            <li><code>se = FALSE</code> removes the shaded confidence interval around the line.</li>
            <li>The slope of the line shows whether the relationship is positive or negative.</li>
          </ul>
          <p className="mb-3">
            Try changing the variables to explore different relationships — for example, minutes played (<code>MP</code>) vs. points (<code>PTS</code>).
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <p className="mb-3">
            Do these exercises in RStudio first. Once you have your answers, write your code in the textbox below so the app can check if you are correct.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Create a scatterplot showing the relationship between assists (AST) and points (PTS).</li>
            <li>Add transparency with <code>alpha = 0.3</code>.</li>
            <li>Add a regression line using <code>geom_smooth(method = "lm")</code>.</li>
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
              🎉 Great job! You've completed Lesson 4.2!
            </p>
          )}
          {result === 'incorrect' && (
            <p className="mt-8 font-semibold text-center text-red-600">
              ❌ Try again! Make sure your scatterplot includes both <code>geom_point()</code> and <code>geom_smooth(method="lm")</code>.
            </p>
          )}
        </section>

        <hr className="my-6 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course/unit4/lesson1">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 4.1
            </button>
          </Link>
          <Link href="/course/unit4/lesson3">
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
