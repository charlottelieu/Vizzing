'use client';

import Link from 'next/link';

export default function Unit6Lesson1() {
  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-gray-900 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Unit 6: World of GitHub 
        </h1>
         <h2 className="text-2xl font-semibold mb-3">6.1 Create An Account</h2>

        <section className="mb-10">
          <p className="mb-4">
            GitHub is a major platform where millions of developers store their code, collaborate on software, 
            and share projects publicly with others. In this lesson, you will create your own GitHub account 
            and explore important features you will use throughout this course.
          </p>
          <hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Step 1: Create Your Account</h3>

          <p className="mb-2">
            Open a web browser and go to 
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> www.github.com</a>.
            Click the “Sign up” button in the top right corner.
          </p>

          <p className="mb-2">
            Enter your email address and create a secure password. Follow the steps to verify your email when GitHub sends you a confirmation message.
            When prompted, select the Free Plan.
          </p>

          <p className="mb-4">
            Congratulations! You now have a GitHub account and are ready to join the open-source world.
          </p>
<hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Step 2 (Optional): Personalize Your Profile</h3>

          <p className="mb-2">
            After logging in, click your profile picture in the top-right corner and select <strong>Edit profile</strong>.
            You can customize your account by adding:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li>A profile picture</li>
            <li>A short bio about you</li>
            <li>Your location</li>
            <li>Your personal website or social links</li>
          </ul>

          <p className="mb-6">
            This step helps others learn who you are as a developer, and it makes your page more inviting for future viewers.
          </p>
          <hr className="my-6 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Step 3: Explore the Dashboard</h3>

          <p className="mb-2">
            When viewing your GitHub profile, you will see several important tabs that help you manage your work:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li><strong>Overview</strong> – Your profile homepage showing your contributions and activity.</li>
            <li><strong>Repositories</strong> – Where all of your code projects are stored.</li>
            <li><strong>Projects</strong> – Helps organize tasks and ideas related to your code projects.</li>
            <li><strong>Packages</strong> – Hosts and manages software packages for your projects.</li>
            <li><strong>Stars</strong> – A place to save projects you find interesting or want to learn from.</li>
          </ul>

          <p className="mb-6">
            You now understand the essentials of navigating GitHub. In the next lesson, you will learn
            how to upload your first R project to share it online!
          </p>
        </section>

        <hr className="my-8 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course">
            <button className="mr-8 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to Course
            </button>
          </Link>

          <Link href="/course/unit6/lesson2">
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
