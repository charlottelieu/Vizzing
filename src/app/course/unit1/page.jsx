'use client';

import Link from 'next/link';
import Image from "next/image";

export default function Unit1() {
  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-gray-900 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Unit 1: Install R
        </h1>

        <section className="mb-10">
          <p className="mb-2">
            Welcome to the course on R! You will learn how to use R, a powerful programming language for data analysis and visualizations. 
            This is your first step towards making your own data analysis projects to make discovieries and find patterns in data.
            After completing this course, you will be able to use R to analyze datasets, and create visualizations to draw meaningful conclusions 
            to share with others on this platform!
            In this first unit, we will guide you through the installation process of R and RStudio.
          
          </p>
          
          <h2 className="text-2xl font-semibold mb-3">1.1 Installation Guide</h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">For Windows Users:</h3>
          <p className="mb-2">
            <strong>Step 1: Install R</strong><br />
            Open an internet browser and go to <a href="https://www.r-project.org" className="text-blue-600 underline">www.r-project.org</a>.
            Click the “download R” link in the middle of the page under “Getting Started.” Select a CRAN
            location (a mirror site) and click the corresponding link. Click on the “Download R for Windows”
            link at the top of the page. Click on the “install R for the first time” link at the top of the page.
            Click “Download R for Windows” and save the executable file somewhere on your computer.
            Run the .exe file and follow the installation instructions. Now that R is installed, you need
            to download and install RStudio.
          </p>
          <Image src={"/images/1.1.png"} alt="1.1" width={800} height={600} />
            <div className="h-10"></div>

          <p className="mb-2">
            <strong>Step 2: Install RStudio</strong><br />
            Go to <a href="https://www.rstudio.com" className="text-blue-600 underline">www.rstudio.com</a> and click on the “Download RStudio” button.
            Click on “Download RStudio Desktop.” Click on the version recommended for your system,
            or the latest Windows version, and save the executable file. Run the .exe file and follow
            the installation instructions.
          </p>
           <Image src={"/images/1.12.png"} alt="1.1" width={800} height={600} />
            <div className="h-10"></div>

          <h3 className="text-xl font-semibold mt-4 mb-2">For Mac Users:</h3>
          <p className="mb-2">
            <strong>Step 1: Install R</strong><br />
            Open an internet browser and go to <a href="https://www.r-project.org" className="text-blue-600 underline">www.r-project.org</a>.
            Click the “download R” link in the middle of the page under “Getting Started.” Select a CRAN
            location (a mirror site) and click the corresponding link. Click on the “Download R for (Mac) OS X”
            link at the top of the page. Click on the file containing the latest version of R under “Files.”
            Save the .pkg file, double-click it to open, and follow the installation instructions. Now that R
            is installed, you need to download and install RStudio.
          </p>

          <p className="mb-2">
            <strong>Step 2: Install RStudio</strong><br />
            Go to <a href="https://posit.co/download/rstudio-desktop/" className="text-blue-600 underline">www.posit.co/download/rstudio-desktop/</a> and click on “Download RStudio Desktop.”
            Click on the version recommended for your system, or the latest Mac version, save the .dmg file,
            double-click it to open, and then drag and drop it to your applications folder.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Creating a Working Directory</h3>
          <p className="mb-2">
            Congrats! You have installed R! You will be writing code to analyze different data sets as well as
            generating lots of output. The working directory is the place where R will save any output you generate.
            For the purpose of this course, you should keep all of your work in one place. 
          </p>
          <p className="mb-2">
            So that everyone is on the same page, go to your Desktop and create a new folder called <strong>Vizzing</strong>.
            Then inside that folder, create a new folder named <strong>data</strong>, and a separate folder named <strong>scripts</strong>.
          </p>
        </section>

        <hr className="my-8 border-gray-300" />

        <div className="mt-12 text-center">
          <Link href="/course">
            <button className=" mr-8 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
              ← Back to Course
            </button>
          </Link>
           <Link href="/course/unit1/lesson2">
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
