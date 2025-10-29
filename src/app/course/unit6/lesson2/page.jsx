'use client';

import Link from 'next/link';

export default function Unit6Lesson2() {
  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-gray-900 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Unit 6: World of GitHub
        </h1>
        <h2 className="text-2xl font-semibold mb-3">6.2 Upload Your R Project</h2>

        <section className="mb-10">
          <p className="mb-4">
            Now that you have created your GitHub account and explored the platform, 
            it is time to upload the R project you completed earlier in the course.
          </p>
   <hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Step 1: Create a New Repository</h3>

          <p className="mb-2">
            Click the <strong>New</strong> button on the left sidebar, or click the <strong>+</strong> icon in the top-right 
            and select <strong>New repository</strong>.
          </p>

          <p className="mb-2">
            Fill out the repository details:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li><strong>Repository name</strong>: Title of your project</li>
            <li><strong>Description</strong>: A short explanation of your analysis</li>
            <li><strong>Visibility</strong>: Select <strong>Public</strong> so others can view your work</li>
          </ul>

          <p className="mb-2">
            Under <strong>Initialize this repository</strong>, check:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li>Add a README file</li>
          </ul>

          <p className="mb-6">
            Click <strong>Create repository</strong>. This creates a space where your project will be stored.
          </p>
          <hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Step 2: Upload Your Files</h3>

          <p className="mb-2">
            In your new repository, click <strong>Add file</strong> and select <strong>Upload files</strong>.
          </p>

          <p className="mb-2">
            Then click <strong>Choose your files</strong>. Navigate to your Desktop → Project Folder.
          </p>

          <p className="mb-2">You should upload the following:</p>

          <ul className="list-disc ml-8 mb-4">
            <li>R Script</li>
            <li>Image of Visualization</li>
            <li>CSV Data Set</li>
          </ul>

          <p className="mb-6">
            Scroll down and click <strong>Commit changes</strong>. Your project is now online. 
            If everything is visible, your upload is successful.
          </p>
<hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Step 3: GitHub Commands</h3>

          <p className="mb-2">
            When you work locally in RStudio, VS Code, or another editor, you will often update your work 
            on your computer and sync those changes to GitHub. Here are the basic commands:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li><code>git clone &lt;URL&gt;</code> — Download the remote repository to your computer</li>
            <li><code>git add .</code> — Stage all changed files</li>
            <li><code>git commit -m "message"</code> — Commit changes with a message</li>
            <li><code>git push</code> — Send your new commits to GitHub</li>
            <li><code>git pull</code> — Get the latest changes from GitHub</li>
            <li><code>git status</code> — Check the state of your working directory</li>
          </ul>

          <p className="mb-6">
            These commands connect the work on your computer with the version stored on GitHub.
            To learn more GitHub commands on your own time, you can use the GitHub Education
            Cheat Sheet linked here:
            <a 
              href="https://education.github.com/git-cheat-sheet-education.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline ml-1"
            >
              GitHub Education Cheat Sheet
            </a>
          </p>
          <hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Congratulations!</h3>

          <p className="mb-4">
            You have officially uploaded your first data analysis project to GitHub. 
            This is an important step toward real-world data work.
          </p>

          <ul className="list-disc ml-8 mb-6">
            <li>You can upload more projects as your skills grow</li>
            <li>You will soon connect your work to your Vizzing account</li>
            <li>You can share your analysis with classmates and collaborators</li>
          </ul>

          <p className="mb-6">
            You are now using the same tools professional data analysts and developers use every day.
            Continue creating projects, uploading code to GitHub, and sharing visualizations on Vizzing
            to build your personal analytics portfolio.
          </p>

        </section>

        <hr className="my-8 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course/unit6">
            <button className="mr-8 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to 6.1
            </button>
          </Link>

          <Link href="/course">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              Back to Course →
            </button>
          </Link>

          <div className="h-40"></div>
        </div>
      </div>
    </div>
  );
}
