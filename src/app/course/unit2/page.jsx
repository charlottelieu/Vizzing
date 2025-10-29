'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Unit2() {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
  const code = userCode.toLowerCase();
  const hasY = code.includes('y <-');
  const hasZ = code.includes('z <-');
  const hasSqrt = code.includes('sqrt(y)') && code.includes('sqrt(z)');
  const hasRound = code.includes('round') && code.includes('digits=3');

  if (hasY && hasZ && hasSqrt && hasRound) {
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
          <h2 className="text-2xl font-semibold mb-3">2.1 Data Handling Basics</h2>

          <h3 className="text-xl font-semibold mb-2">1. R as a Calculator</h3>
          <p className="mb-3">
            Like other coding languages, the simplest thing we can do is to use R as a calculator!
          </p>
          <p className="mb-3">
            R can work just like a calculator. For example, if we type this into R:
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`2 + 3 * (6 - 4)^5`}
          </pre>

          <p className="mb-3">R will return:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`[1] 98`}
          </pre>

          <p className="mb-3">
            Try it for yourself! That means R correctly followed the order of operations (PEMDAS).
          </p>
            <hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2 mt-6">2. Built-in Functions</h3>
          <p className="mb-3">
            R also comes with many built-in functions, just like a scientific calculator. Here are some examples:
          </p>

          <p className="mb-2 font-semibold">Inputs:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`sqrt(4)     # square root
log(10)     # natural log
cos(pi)     # cosine of pi`}
          </pre>

          <p className="mb-2 font-semibold">Outputs:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`[1] 2
[1] 2.302585
[1] -1`}
          </pre>
          <hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2 mt-6">3. Assigning Values to Variables</h3>
          <p className="mb-3">
            Sometimes we want to save a calculation so we can use it later. In R, we use <code className="bg-gray-100 px-1 rounded">{'<-'}</code> to assign values to a variable.
          </p>

          <p className="mb-2 font-semibold">Example:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`x <- 2 + 3 * (6 - 4)^5`}
          </pre>

          <p className="mb-3">
            This saves the value 98 as the variable <code>x</code>. Now we can use <code>x</code> in other calculations:
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`x
1/x
x + 1
sqrt(x)`}
          </pre>

          <p className="mb-2 font-semibold">Outputs:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`[1] 98
[1] 0.01020408
[1] 99
[1] 9.899495`}
          </pre>

          <p className="mb-3">
            A vector is a collection of values of the same type. You can create one using <code>c()</code>:
          </p>

          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`# numeric vector
y <- c(1, 2, 3)  

# character vector
letters <- c("a", "b", "c")  

# print them
y
letters`}
          </pre>

          <p className="mb-2 font-semibold">Output:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`[1] 1 2 3
[1] "a" "b" "c"`}
          </pre>
<hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2 mt-6">4. Rounding Numbers</h3>
          <p className="mb-3">
            The <code>round()</code> function lets us round numbers. It takes two arguments:
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>The number we want to round,</li>
            <li>The number of digits to keep.</li>
          </ul>

          <p className="mb-2 font-semibold">Examples:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`round(3.14159, digits = 2)
round(3.14159, digits = 4)
round(sqrt(x), digits = 4)`}
          </pre>

          <p className="mb-2 font-semibold">Outputs:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`[1] 3.14
[1] 3.1416
[1] 9.8995`}
          </pre>
<hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2 mt-6">5. Errors with Undefined Variables</h3>
          <p className="mb-3">
            If you use a variable that hasn’t been defined yet, R will throw an error.
          </p>

          <p className="mb-2 font-semibold">Example:</p>
          <pre className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
{`y + 5`}
          </pre>

          <p className="mb-3">
            Since <code>y</code> has not been defined, R will not know what to do.
          </p>
<hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2 mt-6">Practice</h3>
          <p className="mb-3">
            Do these exercises in RStudio first. Once you have your answers, copy the code into the textbox on this website so the app can check if you are correct.
          </p>

          <ul className="list-disc list-inside mb-3">
            <li>Save the value of 8/5 + 3^3 as a new variable called y.</li>
            <li>Save the value of y/2 as a new variable called z.</li>
            <li>Compute the square root of y and z.</li>
            <li>Round these values to 3 decimal places.</li>
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
  <p className="mt-8 font-semibold text-center">🎉 Congrats on completing 2.1!</p>
)}
        </section>

        <hr className="my-8 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course">
            <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to Course
            </button>
          </Link>
          <Link href="/course/unit2/lesson2">
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
