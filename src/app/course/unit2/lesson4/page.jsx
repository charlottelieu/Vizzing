'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Lesson24() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
  const code = userCode.toLowerCase().replace(/\s/g, '');

  const hasArrangeAway = code.includes('arrange(') && code.includes('away_score') ;
  const hasDifference = code.includes('difference <- abs(') || code.includes('difference = abs(');
  const hasArrangeDiff = code.includes('arrange(') && code.includes('difference');
  const hasGameId = code.includes('game_id');

  if (hasArrangeAway && hasDifference && hasArrangeDiff && hasGameId) {
    setResult('correct');
  } else {
    setResult('incorrect');
  }
};


  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-gray-900 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Unit 2: Introduction to R
        </h1>

        <h2 className="text-2xl font-semibold mb-3">2.4 Arrange & Mutate Data</h2>

        <section>
          <p className="mb-3">
            Now that we have installed packages and know how to upload data, let’s learn how to rearrange and transform the data.
            This is called <strong>data wrangling</strong>. In R, the <code>dplyr</code> package gives us powerful tools for this.
          </p>

          <p className="mb-3">The two functions we’ll learn today are:</p>

          <ul className="list-disc list-inside mb-3">
            <li><code>arrange()</code> – reorder the rows of a table</li>
            <li><code>mutate()</code> – create new variables (columns) from old ones</li>
          </ul>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">1. Load the NFL Playoff Games Data</p>
          <p className="mb-3">
            We’re going to use the same dataset from lesson 2.2. 
            Here’s the link again: <a href="https://github.com/ryurko/nflscrapR-data/blob/master/games_data/post_season/post_games_2009.csv" className="text-blue-600 underline">Post Games 2009 CSV</a>
            
          </p>
          <p className="mb-3">
            If you haven’t already, save it somewhere you can find on your computer, 
            then find it in the Files section of R and upload it into R like this:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>nfl_games &lt;- read_csv("post_games_2009.csv")</code>
          </pre>
          <p className="mb-3">The data should look like this:</p>
          <Image src={"/images/2.4.png"} alt="2.4" width={900} height={600} />
                      <div className="h-10"></div>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Arranging Data</p>
          <p className="mb-3">
            The <code>arrange()</code> function lets us sort rows by the values of a column. 
            For example, let’s sort the games by the home team’s score:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>arrange(nfl_games, home_score)</code>
          </pre>
          <p className="mb-3">
            If we do this, we should see the games ordered by the fewest home points to the most in our console.
          </p>
            <Image src={"/images/2.42.png"} alt="2.42" width={900} height={600} />
                      <div className="h-10"></div>
          <p className="mb-3">
            To reverse it (highest score first), we use <code>desc()</code>:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>arrange(nfl_games, desc(home_score))</code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Creating New Variables with Mutate</p>
          <p className="mb-3">
            The <code>mutate()</code> function lets us create new columns. 
            For example, suppose we want to find the margin of victory for the home team. 
            We can create a new column like this:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>mutate(nfl_games, margin = home_score - away_score)</code>
          </pre>
          <Image src={"/images/2.43.png"} alt="2.43" width={900} height={600} />
                      <div className="h-10"></div>
          <p className="mb-3">
            This adds a new column called <code>margin</code> showing how many points the home team won or lost by.
          </p>
          <p className="mb-3">
            If we want to keep the new column in our dataset, we overwrite it:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>nfl_games &lt;- mutate(nfl_games, margin = home_score - away_score)</code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">4. Multiple New Variables</p>
          <p className="mb-3">
            We can create more than one new variable at a time. For example, let’s also calculate the total points scored in each game:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
{`nfl_games <- mutate(
  nfl_games,
  margin = home_score - away_score,
  total_points = home_score + away_score
)
nfl_games`}
            </code>
          </pre>
           <Image src={"/images/2.44.png"} alt="2.44" width={900} height={600} />
                      <div className="h-10"></div>
          <p className="mb-3">
            Now <code>nfl_games</code> includes both the <code>margin</code> and <code>total_points</code> columns.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <p className="mb-3">
            Do these exercises in RStudio first. Once you have your answers, copy the code into the textbox on this website so the app can check if you are correct.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Arrange the games so the away team’s score is highest at the top.</li>
            <li>Create a new variable <code>difference = abs(home_score - away_score)</code> (absolute difference in score).</li>
            <li>Arrange the games by new column <code>difference</code>.</li>
            <li>Write below the <code>game_id</code> the game with the biggest score difference.</li>
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
              🎉 Congrats on completing 2.4!
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
          <Link href="/course/unit2/lesson3">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 2.3
            </button>
          </Link>
          <Link href="/course/unit2/final">
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
