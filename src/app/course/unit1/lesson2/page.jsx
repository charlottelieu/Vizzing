'use client';

import Link from 'next/link';

export default function Unit1() {
  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-gray-900 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Unit 1: Install R
        </h1>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1.2 Learn the Set Up of R</h2>
          <p className="mb-3">
            When you open RStudio for the first time, it should open up a new window that looks something like this:
          </p>
          <p className="mb-3">
            The RStudio window is divided into three panes. For now, we will focus only on the big pane on the left, the Console pane.
            At the top of the Console pane, there is a bit of introductory text that shows the version of R that we are using and the license.
            Below that, you should see a <code className="bg-gray-100 px-1 rounded">&gt;</code>, which is the R prompt.
            At its core, R uses a command-line interface, meaning that you interact with the software by typing commands and pressing Enter or Return.
          </p>

          <p className="mb-3">
            Before we do anything, we need to create a folder called <strong>Vizzing</strong>. This will be where we store all our code files.
            On your desktop, right click and create a new folder called “Vizzing”.
          </p>

          <p className="mb-3">
            Now, go in R and tell R to change the working directory to our Vizzing folder. We can do this in a couple of ways:
          </p>

          <ul className="list-disc list-inside mb-3">
            <li>
              In the top toolbar, go to <strong>Session → Set Working Directory → Choose Working Directory</strong> to select and set your working directory.
            </li>
            <li>
              The code <code className="bg-gray-100 px-1 rounded">setwd("~/Desktop/Vizzing")</code> sets your working directory to the Vizzing folder,
              and can be edited for any file location.
            </li>
          </ul>
        </section>
         <hr className="my-8 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course/unit1">
            <button className=" mr-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to Lesson 1
            </button>
          </Link>
           <Link href="/course">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              Back to Course →
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
