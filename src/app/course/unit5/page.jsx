'use client';
import { useState } from 'react';
import Link from 'next/link';
import Papa from 'papaparse';

export default function Unit5Final() {
  const [csvFile, setCsvFile] = useState(null);
  const [dataPreview, setDataPreview] = useState([]);
  const [userInsights, setUserInsights] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      preview: 5, 
      complete: (results) => {
        setDataPreview(results.data);
      },
    });
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 text-[13pt] font-[Times_New_Roman] text-black leading-relaxed">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          📊 Unit 5 Final Case Study: Explore Your Own Data
        </h1>

        <p className="mb-3">
           For the final unit of this course, you will use what you have learned to analyze your own dataset. Follow the steps below to choose a dataset, clean it, create visualizations, and draw insights.
           This page is just to help you follow along. Make sure to code in your own R environment! You'll be able to upload your work
           on Github and eventually Vizzing later.
          </p>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 1: Choose Your Dataset</h2>
          <p className="mb-3">
            Select a CSV dataset that interests you. It could be sports stats, finance data, health info, or anything else you like.
          </p>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="mb-3"
          />
          {dataPreview.length > 0 && (
            <div className="bg-gray-100 p-3 rounded-md mb-3 overflow-auto">
              <p className="font-semibold mb-2">Preview of your data (first 5 rows):</p>
              <pre className="text-xs">{JSON.stringify(dataPreview, null, 2)}</pre>
            </div>
          )}
          <p className="text-gray-700 text-sm">
            <strong>Hint:</strong> Look at your column names and types to decide which variables you want to analyze.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 2: Data Cleaning / Selecting Columns</h2>
          <p className="mb-3">
            Make sure you have the columns you need. You might rename, filter, or create new columns to prepare your data for analysis.
          </p>
         
          <p className="text-gray-700 text-sm">
            <strong>Hint:</strong> Think about which variables will be interesting to visualize.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 3: Graph Your Data</h2>
          <p className="mb-3">
            Create visualizations to explore your dataset. Use scatterplots, histograms, bar charts, or any graph that helps you understand trends and patterns.
          </p>
          
          <p className="text-gray-700 text-sm">
            <strong>Hint:</strong> Try different plot types and consider grouping, coloring, or faceting by categories.
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 4: Insights</h2>
          <p className="mb-3">
            Reflect on your graphs and data. What patterns, trends, or interesting findings do you notice?
          </p>
          <textarea
            value={userInsights}
            onChange={(e) => setUserInsights(e.target.value)}
            placeholder="Write your observations and insights here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-32 mt-2 mb-2"
          />
          <p className="text-gray-700 text-sm">
            <strong>Hint:</strong> Consider questions like: What variables are related? Are there outliers? Any surprising patterns?
          </p>
        </section>

        <hr className="my-6 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 5: Put It All Together</h2>
          <p className="mb-3">
            Summarize your findings and explain why your dataset and graphs are interesting. This is your final reflection for Unit 5.
          </p>
          <textarea
            value={userInsights}
            onChange={(e) => setUserInsights(e.target.value)}
            placeholder="Write your final summary and reflections here..."
            className="w-full p-3 border rounded-md font-mono text-sm h-40 mt-2 mb-2"
          />
        </section>

        <hr className="my-6 border-gray-300" />

        <div className="mt-12 text-center">
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
