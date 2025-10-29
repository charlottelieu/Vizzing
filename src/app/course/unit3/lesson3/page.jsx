'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson33() {
  const [userCode, setUserCode] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
  const code = userCode.toLowerCase().replace(/\s/g, '');

  const filter1 = code.includes('pts>35') || code.includes('pts>=36');
  const filter2 = code.includes('pts>25') && code.includes('ast>=8');
  const filter3 = code.includes('pts>=10') && code.includes('reb>=10') && code.includes('ast>=10');
  const filter4 = code.includes('opponent!="det"') || code.includes('opponent!="detroit"');

  if (filter1 && filter2 && filter3 && filter4) {
    setResult('correct');
  } else {
    setResult('incorrect');
  }
};

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 3: Plot Plot Plot</h1>
        <h2 className="text-2xl font-semibold mb-3">3.3 Filtering</h2>

        <section>
          <p className="mb-3">
            By this point, you’ve explored how to visualize data distributions and relationships between variables. Now, let’s learn how to filter data, or how to focus only on data that meet specific conditions.
          </p>
          <p className="mb-3">Filtering can help us answer questions like:</p>
          <ul className="list-disc list-inside mb-3">
            <li>“How many games did Michael Jordan score more than 30 points?”</li>
            <li>“When did he score more than 30 points when he had at least 10 assists?”</li>
          </ul>
          <p className="mb-3">
            The <code>filter()</code> function from the <code>dplyr</code> package (part of tidyverse) allows us to do this.
          </p>
          <p className="mb-3">Here’s the general structure:</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>filter(dataset, condition)</code>
          </pre>
          <p className="mb-3">For example:</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>filter(mj_data, PTS &gt; 30)</code>
          </pre>
          <p className="mb-3">
            This returns only the rows (games) where Michael Jordan scored more than 30 points.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">1. Logical Operators</p>
          <p className="mb-3">You can combine conditions using comparison and logical operators. Here’s a chart to help you memorize the different logical operators:</p>
          <table className="table-auto border-collapse border border-gray-300 mb-3 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">Symbol</th>
                <th className="border border-gray-300 px-2 py-1">Meaning</th>
                <th className="border border-gray-300 px-2 py-1">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">==</td>
                <td className="border border-gray-300 px-2 py-1">Equal to</td>
                <td className="border border-gray-300 px-2 py-1">filter(mj_data, AST == 10)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">!=</td>
                <td className="border border-gray-300 px-2 py-1">Not equal to</td>
                <td className="border border-gray-300 px-2 py-1">filter(mj_data, MP != 48)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">&lt;, &lt;=</td>
                <td className="border border-gray-300 px-2 py-1">Less than, less than or equal to</td>
                <td className="border border-gray-300 px-2 py-1">filter(mj_data, PTS &lt; 20)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">&gt;, &gt;=</td>
                <td className="border border-gray-300 px-2 py-1">Greater than, greater than or equal to</td>
                <td className="border border-gray-300 px-2 py-1">filter(mj_data, REB &gt;= 10)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">&amp;</td>
                <td className="border border-gray-300 px-2 py-1">AND</td>
                <td className="border border-gray-300 px-2 py-1">filter(mj_data, PTS &gt; 20 &amp; AST &gt; 5)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">||</td>
                <td className="border border-gray-300 px-2 py-1">OR</td>
                <td className="border border-gray-300 px-2 py-1">filter(mj_data, PTS &gt; 20 || AST &gt; 5)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">!</td>
                <td className="border border-gray-300 px-2 py-1">NOT</td>
                <td className="border border-gray-300 px-2 py-1">filter(mj_data, !PTS &gt; 30)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Using Multiple Conditions</p>
          <p className="mb-3">
            Using the AND operator (<code>&amp;</code>), you can combine multiple filters together. For example:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>filter(mj_data, PTS &gt; 25 &amp; AST &gt; 5)</code>
          </pre>
          <p className="mb-3">
            You can also use the OR operator (<code>||</code>):
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>filter(mj_data, PTS &gt; 40 || AST &gt; 10)</code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Filtering by Specific Values with %in%</p>
          <p className="mb-3">If you want to filter rows where a variable matches any of several values, use <code>%in%</code>.</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>filter(mj_data, Opponent %in% c("BOS", "NYK", "LAL"))</code>
          </pre>
          <p className="mb-3">You can also use ! to exclude them:</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>filter(mj_data, !Opponent %in% c("BOS", "NYK", "LAL"))</code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">4. Combining Conditions</p>
          <p className="mb-3">
            You can create more complex filters by grouping conditions with parentheses. For example:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>filter(mj_data, (PTS &gt; 25 &amp; AST &gt; 5) | (REB &gt;= 10))</code>
          </pre>
          <p className="mb-3">To make it easier to reuse this filtered data, let’s assign it to a new data frame:</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>mj_data &lt;- filter(mj_data, (PTS &gt; 25 &amp; AST &gt; 5) | (REB &gt;= 10))</code>
          </pre>
          <p className="mb-3">Print and see what you get!</p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>mj_data</code>
          </pre>
          <p className="mb-3">This keeps games where either:</p>
          <ul className="list-disc list-inside mb-3">
            <li>Jordan scored more than 25 and had more than 5 assists, or</li>
            <li>He had at least 10 rebounds.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <ul className="list-disc list-inside mb-3">
            <li>Filter for all games where Michael Jordan scored more than 35 points.</li>
            <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Write your R code here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-40 mt-4 mb-4"
          />
            <li>Filter for games where he scored more than 25 points and had at least 8 assists.</li>
            <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Write your R code here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-40 mt-4 mb-4"
          />
            <li>Filter for games where he had a triple double (PTS ≥ 10, REB ≥ 10, AST ≥ 10).</li>
            <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Write your R code here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-40 mt-4 mb-4"
          />
            <li>Filter for games not against the Detroit Pistons (Opponent != "DET").</li>
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
            Check Answers
          </button>

          {result === 'correct' && (
            <p className="mt-8 font-semibold text-center text-green-600">
              🎉 Congrats on completing 3.3!
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
          <Link href="/course/unit3/lesson2">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 3.2
            </button>
          </Link>
          <Link href="/course/unit3/lesson4">
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
