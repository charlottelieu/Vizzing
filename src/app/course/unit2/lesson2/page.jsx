'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Unit2_2() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    if (userCode.trim().toLowerCase() === 'answer key') {
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

        <section>
          <h2 className="text-2xl font-semibold mb-3">2.2 Upload Data Sets / View Them</h2>

          <h3 className="text-xl font-semibold mb-2">1. Uploading CSV Files</h3>
          <p className="mb-3">
            In R, one of the most common ways to get data is by uploading a CSV file.
            CSV stands for <strong>Comma-Separated Values</strong>, which is basically a spreadsheet saved as text.
            We will practice uploading CSV files which you can download from the web.
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`my_data <- read.csv("path/to/your/file.csv")`}
          </pre>

          <ul className="list-disc list-inside mb-3">
            <li><code>"path/to/your/file.csv"</code>: Replace this with the actual path to your CSV file.</li>
            <li><code>my_data</code>: This is the variable that will store your data.</li>
          </ul>

          <p className="mb-3">
            Your data is now in a <strong>data frame</strong>, which is like a spreadsheet in R.
            Using <code>read.csv()</code> will most likely be your first step while coding as we cannot code without data.
            When we start working with sports data, we will be using public data from <a href="https://sports-statistics.com/sports-data/sports-data-sets-for-data-modeling-visualization-predictions-machine-learning/" className="text-blue-600 underline">Sports Data Sets</a>.
          </p>

          <p className="mb-3">More on this later!</p>

          <hr className="my-6 border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">2. Using Built-In R Datasets</h3>
          <p className="mb-3">
            R comes with many datasets of all topics already included.
            To see a list of available datasets, simply type:
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">data()</pre>

          <p className="mb-3">Look at how many!</p>

          <p className="mb-3">Let’s load our first dataset! Type:</p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`library(datasets)
my_data <- data("ToothGrowth")
View(my_data)`}
          </pre>

          <p className="mb-3">
            A new tab should appear, and you should see something like this:
          </p>

          <p className="mb-3">
            To access it, we first used the <code>library()</code> function to load the <code>datasets</code> package,
            which contains many built-in R datasets. Then, we used the <code>data()</code> function to load the specific
            dataset into our R environment. Finally, the <code>View()</code> function lets us open the dataset in a spreadsheet-style window to explore it.
          </p>

          <p className="mb-3">There are also other ways to view our data!</p>

          <hr className="my-6 border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">4. Viewing Your Data</h3>

          <p className="mb-2 font-semibold">Head()</p>
          <p className="mb-3">
            The <code>head()</code> function is used to quickly look at the first few rows of a dataset. 
            By default, it shows the first 6 rows. You can also specify how many rows you want to see:
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`head(data)   # first 6 rows
head(data, 10)   # first 10 rows`}
          </pre>

          <p className="mb-2 font-semibold">Str()</p>
          <p className="mb-3">
            The <code>str()</code> function tells you the number of rows and columns and the type of each column (numeric, character, etc.).
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">str(data)</pre>

          <p className="mb-2 font-semibold">Summary()</p>
          <p className="mb-3">
            This shows minimum, maximum, mean, and quartiles for numeric data, or counts for categorical data.
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">summary(data)</pre>

          <hr className="my-6 border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">5. Accessing Columns</h3>
          <p className="mb-3">
            You can access specific columns using the <code>$</code> symbol:
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`data$len
data$supp`}
          </pre>

          <p className="mb-3">
            You can also calculate statistics on a column:
          </p>

          <p className="font-semibold mb-2">Inputs:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`mean(ToothGrowth$len)
median(ToothGrowth$len)
max(ToothGrowth$len)
min(ToothGrowth$len)`}
          </pre>

          <p className="font-semibold mb-2">Outputs:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`> mean(ToothGrowth$len)
[1] 18.81333
> median(ToothGrowth$len)
[1] 19.25
> max(ToothGrowth$len)
[1] 33.9
> min(ToothGrowth$len)
[1] 4.2`}
          </pre>

          <hr className="my-6 border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">Practice</h3>
          <p className="mb-3">
            Do these exercises in RStudio first. Once you have your answers, copy the code into the textbox on this website so the app can check if you are correct.
          </p>

          <ul className="list-disc list-inside mb-3">
            <li>Download this dataset:<a href="https://github.com/ryurko/nflscrapR-data/blob/master/games_data/post_season/post_games_2009.csv" className="text-blue-600 underline">Post Games 2009 CSV</a>.</li>
            <li>Click the download button in the top-right corner, then select “Show in folder” to open the folder where the file was saved.</li>
            <li>Copy it and paste it into any folder you prefer.</li>
            <li>Create a new folder called “Data” on your desktop to store all your datasets for R projects.</li>
            <li>In R, find the file path in the bottom right-hand panel and copy the address path.</li>
            <li>Write <code>my_data &lt;- read.csv("path/to/your/file.csv")</code></li>
            <li>Use <code>head()</code> to view the first 8 rows of your data.</li>
            <li>Use <code>str()</code> to check the structure of your dataset.</li>
            <li>Use <code>summary()</code> to see a statistical summary.</li>
            <li>Access a column of your choice and calculate the mean.</li>
          </ul>

          <div className="my-6">
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              placeholder="Write your R code here..."
              className="w-full h-40 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={checkAnswer}
              className="mt-3 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md transition"
            >
              Check Answer
            </button>
            {result === 'correct' && (
              <p className="mt-3 text-green-600 font-semibold">✅ Correct!</p>
            )}
            {result === 'incorrect' && (
              <p className="mt-3 text-red-600 font-semibold">❌ Try again.</p>
            )}
          </div>

          {result === 'correct' && (
            <p className="mt-8 font-semibold text-center">🎉 Congrats on completing 2.2!</p>
          )}
        </section>

        <hr className="my-8 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course/unit2">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to Lesson 2.1
            </button>
          </Link>
          <Link href="/course/unit2/lesson3">
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
