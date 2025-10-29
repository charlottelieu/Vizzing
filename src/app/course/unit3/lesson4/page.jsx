'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson34() {
  const [userCode, setUserCode] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
  const code = userCode.toLowerCase().replace(/\s/g, '');

  const assistLevelCreated = code.includes('assistlevel') && code.includes('case_when');
  const columnsViewed = code.includes('date') && code.includes('opponent') &&
                        code.includes('pts') && code.includes('ast');
  const summaryDone = code.includes('group_by') && code.includes('reframe');

  if (assistLevelCreated && columnsViewed && summaryDone) {
    setResult('correct');
  } else {
    setResult('incorrect');
  }
};

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 3: Plot Plot Plot</h1>
        <h2 className="text-2xl font-semibold mb-3">3.4 Categorical Variables and Summary</h2>

        <section>
          <p className="mb-3 font-semibold">1. Creating Categorical Variables</p>
          <p className="mb-3">
            So far, we’ve used <code>mutate()</code> to create new numeric or continuous variables, but sometimes we want to group or classify data into meaningful categories — like labeling each game as “Low Scoring,” “Average,” or “High Scoring.”
          </p>
          <p className="mb-3">
            To do that, we can use the <code>case_when()</code> function.
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`mj_shots <- mutate(mj_shots,
                   ScoringLevel = case_when(
                     PTS < 15 ~ "Low Scoring",
                     PTS >= 15 & PTS < 30 ~ "Average",
                     PTS >= 30 ~ "High Scoring"))`}
            </code>
          </pre>

          <p className="mb-3">Let’s break that down:</p>
          <ul className="list-disc list-inside mb-3">
            <li>Inside <code>mutate()</code>, we name our new variable: <code>ScoringLevel</code>.</li>
            <li>Then we use <code>case_when()</code> to tell R how to classify each row based on the conditions.</li>
            <li>Each condition uses a tilde <code>~</code>, where the left side is a logical test and the right side is the category to assign when that condition is true.</li>
            <li>Now, every game in our dataset has a category based on how many points Jordan scored.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Selecting Columns</p>
          <p className="mb-3">
            Large datasets often have more columns than we need. If we want to focus on a few specific ones, we can use <code>select()</code> to pull them out.
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>select(mj_shots, Date, Opponent, PTS, AST, REB, ScoringLevel)</code>
          </pre>

          <p className="mb-3">
            This returns only the columns we care about for our current analysis. This can be especially helpful when preparing data for visualizations or summaries.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Summarizing Data</p>
          <p className="mb-3">
            Now that we have our categorical variable, we can summarize the data to understand general trends. For example, what is Jordan’s average points per game?
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>reframe(mj_shots, mean_PTS = mean(PTS))</code>
          </pre>

          <p className="mb-3">Or, to summarize multiple columns at once:</p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`reframe(mj_shots,
        mean_PTS = mean(PTS),
        mean_AST = mean(AST),
        mean_REB = mean(REB))`}
            </code>
          </pre>

          <p className="mb-3">
            This gives us one row summarizing the averages of points, assists, and rebounds across all games.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">4. Summarizing by Category</p>
          <p className="mb-3">
            We can also summarize within categories — for example, to find the average stats for each scoring level.
          </p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`mj_summary <- mj_shots %>%
  group_by(ScoringLevel) %>%
  reframe(mean_PTS = mean(PTS),
          mean_AST = mean(AST),
          mean_REB = mean(REB))`}
            </code>
          </pre>

          <p className="mb-3">Here’s what’s happening:</p>
          <ul className="list-disc list-inside mb-3">
            <li><code>group_by(ScoringLevel)</code> tells R to calculate results separately for each category.</li>
            <li><code>reframe()</code> then summarizes the averages for each group.</li>
            <li>Now we can clearly see how Jordan’s assists and rebounds vary across “Low,” “Average,” and “High Scoring” games.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <ul className="list-disc list-inside mb-3">
            <li>Create a new variable called <code>AssistLevel</code> using <code>case_when()</code> with the following rules:
              <ul className="list-disc list-inside ml-5">
                <li>&lt; 3 → "Low"</li>
                <li>3–7 → "Moderate"</li>
                <li>&gt; 7 → "High"</li>
              </ul>
            </li>
            <li>Write the code needed to view only the columns: <code>Date, Opponent, PTS, AST, AssistLevel</code></li>
            <li>Summarize the average PTS and REB for each <code>AssistLevel</code> using <code>group_by()</code> and <code>reframe()</code>.</li>
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
              🎉 Congrats on completing 3.4!
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
          <Link href="/course/unit3/lesson3">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 3.3
            </button>
          </Link>
          <Link href="/course/unit3/final">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              Final Lesson →
            </button>
          </Link>
          <div className="h-40"></div>
        </div>
      </div>
    </div>
  );
}
