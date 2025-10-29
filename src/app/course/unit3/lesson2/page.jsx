'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson32() {
  const [userCode, setUserCode] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
  const code = userCode.toLowerCase().replace(/\s/g, '');

  const scatter1 = code.includes('ggplot') && code.includes('pts') && code.includes('ast') && code.includes('alpha=0.2');

  const heatmap = code.includes('geom_bin2d') && code.includes('pts') && code.includes('mp') && code.includes('bins=50');

  const scatter2 = code.includes('ggplot') && code.includes('pts') && code.includes('ast') &&
                   code.includes('alpha=0.3') && (code.includes('pts<=40') || code.includes('pts<=40')) &&
                   (code.includes('ast<=12') || code.includes('ast<=12'));

  if (scatter1 && heatmap && scatter2) {
    setResult('correct');
  } else {
    setResult('incorrect');
  }
};

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Unit 3: Plot Plot Plot</h1>
        <h2 className="text-2xl font-semibold mb-3">3.2 More Plotting!</h2>

        <section>

          <p className="mb-3 font-semibold">1. Visualizing Bivariate Data</p>
          <p className="mb-3">
            While examining one variable is useful, we are often more interested in understanding relationships between two variables. 
            For example, how do points scored in a game relate to assists or minutes played?
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = my_data) +
  geom_point(mapping = aes(x = var1, y = var2))`}
            </code>
          </pre>
          <p className="mb-3">Here’s a breakdown. The first two should be review.</p>
          <ul className="list-disc list-inside mb-3">
            <li>ggplot(data = my_data) tells R which dataset to use.</li>
            <li>aes() stands for aesthetics, which maps your data to visual properties like position, color, and size.</li>
            <li>geom_point(mapping = aes(x = var1, y = var2)) adds a layer of points, plotting var1 on the x-axis and var2 on the y-axis.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Using Our Data</p>
          <p className="mb-3">
            With the Michael Jordan dataset (mj_data), we can examine the relationship between points scored and assists per game:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_data) +
  geom_point(mapping = aes(x = PTS, y = AST))`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li>x = PTS puts points scored on the x-axis.</li>
            <li>y = AST puts assists on the y-axis.</li>
            <li>Each point on the graph represents a single game.</li>
            <li>Immediately, we can see trends and possible outliers — games with unusually high points or assists.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Alpha Transparency</p>
          <p className="mb-3">
            When there are many points overlapping, it can be hard to see dense regions. We can add alpha blending to make points semi-transparent:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_data) +
  geom_point(mapping = aes(x = PTS, y = AST), alpha = 0.1)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li>alpha ranges from 0 (fully transparent) to 1 (fully opaque).</li>
            <li>Denser areas appear darker, helping us identify clusters of games.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">4. Heatmaps</p>
          <p className="mb-3">
            A heatmap is like a two-dimensional histogram. We divide the x-y plane into bins and color each bin by the number of points in it. For example:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_data) +
  geom_bin2d(mapping = aes(x = PTS, y = AST)) +
  scale_fill_viridis_c(option = "plasma", direction = 1)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li>geom_bin2d() creates rectangular bins.</li>
            <li>scale_fill_viridis_c() sets the color scale.</li>
            <li>We can increase resolution by increasing the number of bins:</li>
          </ul>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_data) +
  geom_bin2d(mapping = aes(x = PTS, y = AST), bins = 100) +
  scale_fill_viridis_c(option = "plasma", direction = 1)`}
            </code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">5. Zooming In</p>
          <p className="mb-3">
            Sometimes we only want to see a subset of the data. We can adjust the limits of the axes:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`ggplot(data = mj_data) +
  geom_point(mapping = aes(x = PTS, y = AST)) +
  xlim(0, 50) +
  ylim(0, 15)`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-3">
            <li>xlim() and ylim() restrict the plotted range.</li>
            <li>Points outside these ranges are removed.</li>
            <li>Useful for focusing on typical game performance and ignoring extreme outliers.</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <ul className="list-disc list-inside mb-3">
            <li>
              Scatterplot of Points vs. Assists:
              <ul className="list-disc list-inside ml-6">
                <li>Create a scatterplot showing the relationship between points scored (PTS) and assists (AST) in each game. Make the points slightly transparent with alpha = 0.2.</li>
              </ul>
            </li>
            <li>
              Heatmap of Points vs. Minutes Played:
              <ul className="list-disc list-inside ml-6">
                <li>Create a heatmap showing the number of games for each combination of points scored (PTS) and minutes played (MP). Use 50 bins and a color scale of your choice.</li>
              </ul>
            </li>
            <li>
              Zoom In on Typical Games:
              <ul className="list-disc list-inside ml-6">
                <li>Create a scatterplot of points scored (PTS) vs. assists (AST), but only include games with PTS ≤ 40 and AST ≤ 12. Use alpha = 0.3.</li>
              </ul>
            </li>
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
              🎉 Congrats on completing 3.2!
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
          <Link href="/course/unit3">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 3.1
            </button>
          </Link>
          <Link href="/course/unit3/lesson3">
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
