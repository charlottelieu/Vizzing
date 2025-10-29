'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function Lesson23() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

 const checkAnswer = () => {
  const code = userCode.toLowerCase().replace(/\s/g, '');
  const hasInstall = 
    code.includes('install.packages("ggplot2")') &&
    code.includes('install.packages("dplyr")') &&
    code.includes('install.packages("tidyr")') &&
    code.includes('install.packages("readr")');

  const hasLibrary =
    code.includes('library(ggplot2)') &&
    code.includes('library(dplyr)') &&
    code.includes('library(tidyr)') &&
    code.includes('library(readr)');

  if (hasInstall && hasLibrary) {
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

        <h2 className="text-2xl font-semibold mb-3">2.3 Packages & The Tidyverse</h2>

        <section>

          <p className="mb-3">
            <strong>1. What Are Packages?</strong><br />
            So far, we’ve only used the basic functions that come with R. But one of the things that makes R so powerful is packages.
          </p>

          <p className="mb-3">
            A package is a collection of functions, data, and documentation created by other R users.
          </p>

          <p className="mb-3">
            Packages help you do specific tasks, like scraping data from the web, analyzing sports stats, or making cool visualizations.
          </p>

          <p className="mb-3">
            As of today, there are thousands of packages on CRAN (the Comprehensive R Archive Network).
          </p>

          <p className="mb-3">
            Think of a package like an app for R — it adds extra features beyond the basics.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">2. Installing Packages</p>
          <p className="mb-3">
            Once we install a package, it stays in the R memory. There are a few ways to install packages in R:
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>In RStudio: Go to <strong>Tools → Install Packages</strong> in the top menu.</li>
            <li>Or go to the <strong>Packages</strong> tab in the bottom right pane and click <strong>Install</strong>.</li>
          </ul>

          <p className="mb-3">With code:</p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>install.packages("tidyverse")</code>
          </pre>

          <p>This installs the tidyverse package, which we’ll use throughout the course.</p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">3. Loading Packages</p>
          <p className="mb-3">
            After installing, you have to “load” the package into your R session before you can use it using the <code>library()</code> function.
            This is usually the first step in every R project.
          </p>

          <ul className="list-disc list-inside mb-3">
            <li>Go to the Packages tab (bottom right).</li>
            <li>Check the box next to the package name to load it.</li>
          </ul>

          <p className="mb-3">With code:</p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>library(tidyverse)</code>
          </pre>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">4. What Is the Tidyverse?</p>
          <p className="mb-3">
            The tidyverse is a collection of R packages that all work together for:
          </p>

          <ul className="list-disc list-inside mb-3">
            <li>Data manipulation (cleaning and preparing data)</li>
            <li>Data exploration (summarizing and analyzing)</li>
            <li>Data visualization (making charts and graphs)</li>
          </ul>

          <p className="mb-3">
            The tidyverse was developed by Hadley Wickham and others, and you’ll see his name a lot in R programming.
          </p>

          <p className="mb-3">To install and load the tidyverse:</p>

          <pre className="bg-gray-100 p-3 rounded-md mb-3">
            <code>
              install.packages("tidyverse")   # only once{'\n'}
              library(tidyverse)              # every new R session
            </code>
          </pre>

          <p className="mb-3">
            When you load the tidyverse, you’ll see some messages in the console. Don’t worry — that’s just R telling you which packages are being attached.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section>
          <p className="mb-3 font-semibold">Practice:</p>
          <p className="mb-3">
            Do these exercises in RStudio first. Once you have your answers, copy the code into the textbox on this website so the app can check if you are correct.
          </p>

          <p className="mb-3">
            Install and Library the following packages: <strong>ggplot2, dplyr, tidyr, readr</strong>
          </p>

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
              🎉 Congrats on completing 2.3!
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
          <Link href="/course/unit2/lesson2">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 2.2
            </button>
          </Link>
          <Link href="/course/unit2/lesson4">
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
