'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson41() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');
  const [userResponse, setUserResponse] = useState('');

  const checkAnswer = () => {
    const code = userCode.toLowerCase().replace(/\s/g, '');

    const hasGroupBy = code.includes('group_by(');
    const hasSummarize = code.includes('summarize(') || code.includes('reframe(');
    const hasOpponent = code.includes('opponent');
    const hasPts = code.includes('pts');
    const hasMean = code.includes('mean(') || code.includes('avg(');

    if (hasGroupBy && hasSummarize && hasOpponent && hasPts && hasMean) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 4: Advanced Visualizations</h1>
        <h2 className="text-2xl font-semibold mb-3">4.1 Summarizing Data with Grouping</h2>

        <section>
          <p className="mb-3">
            In this lesson, we’ll revisit our <code>mj_shots</code> dataset to learn how to group and summarize data. 
            Grouping allows us to calculate statistics within categories — like finding the average points scored per opponent.
          </p>

          <p className="mb-3">
            These tools are especially useful when analyzing performance trends, comparing across opponents, or summarizing entire seasons.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">1. Grouping Data</p>
          <p className="mb-3">
            The <code>group_by()</code> function splits your data into groups based on one or more columns. 
            For example, we can group Michael Jordan’s games by opponent:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>{`mj_shots_grouped <- mj_shots %>% 
  group_by(Opponent)`}</code>
          </pre>
          <p className="mb-3">
            Now, each group represents all games against a specific team.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Summarizing Data</p>
          <p className="mb-3">
            Once your data is grouped, you can use <code>summarize()</code> (or <code>reframe()</code>) to compute summaries for each group. 
            For example, let’s find the average points and assists Michael Jordan had against each opponent:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>{`mj_summary <- mj_shots %>%
  group_by(Opponent) %>%
  summarize(mean_PTS = mean(PTS),
            mean_AST = mean(AST))`}</code>
          </pre>
          <p className="mb-3">
            This returns one row per opponent with their average points and assists. You can add more summary statistics too, like rebounds or field goal percentage.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Arranging the Results</p>
          <p className="mb-3">
            We can arrange our summarized data to see the top or bottom performing opponents.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>{`mj_summary <- mj_summary %>%
  arrange(desc(mean_PTS))`}</code>
          </pre>
          <p className="mb-3">
            Now the teams where Michael Jordan scored the most on average will appear first.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <p className="mb-3">
            Run the code in RStudio first, then copy it into the textbox below so the app can check your answers.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Group the <code>mj_shots</code> dataset by <code>Opponent</code>.</li>
            <li>Summarize the average <code>PTS</code> and <code>REB</code> for each opponent.</li>
            <li>Arrange the results so the highest average points are at the top.</li>
          </ul>

          <p className="mb-3 font-semibold">Questions:</p>
          <ul className="list-disc list-inside mb-3">
            <li>Which opponent did Michael Jordan score the most points against on average?</li>
            <li>Which team did he have the fewest rebounds against?</li>
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
              🎉 Congrats on completing lesson 4.1!
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
          <Link href="/course/unit4/lesson2">
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
