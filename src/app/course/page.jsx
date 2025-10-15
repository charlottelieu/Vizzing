'use client';

import Link from "next/link";

export default function CourseHome() {
  const units = [
    {
      id: 1,
      title: "Installing R",
      status: "complete",
      lessons: [
        { id: "1.1", name: "Install R" },
        { id: "1.2", name: "Learn the Set Up of R" },
      ],
    },
    {
      id: 2,
      title: "Introduction to R",
      status: "complete",
      lessons: [
        { id: "2.1", name: "Data Handling Basics" },
        { id: "2.2", name: "Upload Data Sets & View Them" },
        { id: "2.3", name: "Packages & The Tidyverse" },
        { id: "2.4", name: "Arrange & Mutate Data" },
        { id: "final", name: "🐧 Unit 2 Final Test: Penguins Case Study" },
      ],
    },
    {
      id: 3,
      title: "Plot Plot Plot",
      status: "start",
      lessons: [
        { id: "3.1", name: "Histograms" },
        { id: "3.2", name: "More Plotting!" },
        { id: "3.3", name: "Filtering" },
        { id: "3.4", name: "Categorical Variables and Summary" },
        { id: "final", name: "Unit 3 Final Test" },
      ],
    },
    {
      id: 4,
      title: "Advanced Visualizations",
      status: "locked",
      lessons: [
        { id: "4.1", name: "Summarizing Data with Grouping" },
        { id: "4.2", name: "Creating Custom Metrics" },
        { id: "4.3", name: "Correlations & Trends" },
        { id: "4.4", name: "Case Study: Player Consistency" },
        { id: "final", name: "Unit 4 Final Lesson" },
      ],
    },
    {
      id: 5,
      title: "Exploration & Insights",
      status: "locked",
      lessons: [
        { id: "5.1", name: "Scatterplots & Regression Lines" },
        { id: "5.2", name: "Faceting & Grouped Plots" },
        { id: "5.3", name: "Interactive Visuals" },
        { id: "5.4", name: "Building Dashboards" },
        { id: "final", name: "Unit 5 Final Lesson" },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-16"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      <h1 className="text-4xl font-bold text-purple-700 mb-12">
        R Course Overview
      </h1>

      <div className="w-[90%] max-w-3xl space-y-8">
        {units.map((unit) => (
          <div
            key={unit.id}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
          >
            {/* Header */}
               <div className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-bold text-black">
    Unit {unit.id}: {unit.title}
  </h2>

  {unit.status === "start" ? (
    <Link href={`/course/unit${unit.id}`}>
      <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-purple-600 transition">
        Start
      </button>
    </Link>
  ) : unit.status === "complete" ? (
    <Link href={`/course/unit${unit.id}`}>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-green-600 transition">
        Complete
      </button>
    </Link>
  ) : (
    <button
      disabled
      className="bg-gray-100 text-gray-400 px-4 py-2 rounded-lg text-sm font-semibold shadow-md cursor-not-allowed"
    >
      🔒 Locked
    </button>
  )}
</div>


            {/* What You'll Learn */}
            <p className="font-bold text-black mb-2">What You'll Learn:</p>

            {/* Lessons */}
            <ul className="list-disc list-inside space-y-1">
              {unit.lessons.map((lesson) => (
                <li key={lesson.id}>
                  {lesson.id !== "final" && (
                    <span className="font-medium">{lesson.id} </span>
                  )}
                  {lesson.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
