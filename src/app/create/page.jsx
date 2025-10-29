"use client";
import Link from "next/link";

export default function CreatePage() {
  return (
    <div 
     className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-12"
    style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 className="text-4xl font-bold text-purple-700 mb-3">
        Create
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Upload your visualizations to your profile
      </p>

      <div className="flex justify-center mb-10">
        <button
          onClick={() => (window.location.href = "/create/github")}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold text-lg py-6 px-16 rounded-2xl shadow-md transition-all"
        >
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-8 h-8 mb-2"
            >
              <path d="M12 1C5.37 1 0 6.37 0 13c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.262.82-.583v-2.19c-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.757.083-.742.083-.742 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.493.997.108-.776.418-1.304.76-1.606-2.665-.3-5.466-1.336-5.466-5.933 0-1.31.468-2.382 1.236-3.222-.124-.302-.535-1.52.118-3.17 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3-.404c1.02.004 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.65.244 2.868.12 3.17.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.63-5.475 5.925.43.372.823 1.102.823 2.222v3.293c0 .324.22.7.825.582C20.565 22.797 24 18.298 24 13c0-6.63-5.373-12-12-12z" />
            </svg>
            Upload from GitHub
          </div>
          <p className="text-sm font-normal mt-1">Import existing projects</p>
        </button>
      </div>

      <div className="border rounded-2xl p-6 max-w-3xl mx-auto mb-10">
        <h2 className="font-semibold mb-4">Free Datasets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Sports Datasets</h3>
            <p className="text-sm text-gray-600">
              <a href="https://sports-statistics.com/sports-data/sports-data-sets-for-data-modeling-visualization-predictions-machine-learning/" 
              className="text-blue-600 underline">Sport-Statistics.com</a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="https://sportsandsociety.osu.edu/sports-data-sets" 
              className="text-blue-600 underline">Ohio State University Sports Data Sets</a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="https://www.madronavl.com/launchable/public-data-sources-sports" 
              className="text-blue-600 underline">Mandrona Venture Labs Public Sports Data</a>
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Weather Data</h3>
            <p className="text-sm text-gray-600">
              <a href="https://www.kaggle.com/datasets/zaraavagyan/weathercsv" 
              className="text-blue-600 underline">Kaggle Weather CSV's</a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="https://www.ncei.noaa.gov/cdo-web/" 
              className="text-blue-600 underline">NOAA Climate Data Online</a>
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Stocks Data</h3>
             <p className="text-sm text-gray-600">
              <a href="https://www.kaggle.com/datasets/jacksoncrow/stock-market-dataset" 
              className="text-blue-600 underline">Kaggle Stock Market Datasets</a>
            </p>
             <p className="text-sm text-gray-600">
              <a href="https://www.datacamp.com/datalab/datasets/dataset-r-stock-exchange" 
              className="text-blue-600 underline">Stock Exchange Data</a>
            </p>
             <p className="text-sm text-gray-600">
              <a href="https://stooq.com/db/h/" 
              className="text-blue-600 underline">Free Historical Market Data</a>
            </p>    
          </div>
          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Music & Entertainment</h3>
           <p className="text-sm text-gray-600">
              <a href="https://www.kaggle.com/datasets/zaheenhamidani/ultimate-spotify-tracks-db" 
              className="text-blue-600 underline">Kaggle Spotify Tracks Dataset 1921-2023</a>
            </p> 
            <p className="text-sm text-gray-600">
              <a href="https://www.kaggle.com/datasets/akshaypawar7/imdb-top-1000-movies-dataset" 
              className="text-blue-600 underline">Kaggle IMDb Top 1000 Movies</a>
            </p> 
            <p className="text-sm text-gray-600">
              <a href="https://www.kaggle.com/datasets/dhruvildave/billboard-the-hot-100-songs" 
              className="text-blue-600 underline">Billboard Hot 100 1958-2021</a>
            </p> 
          </div>
        </div>
      </div>

      <div className="border rounded-2xl p-6 max-w-3xl mx-auto">
        <h2 className="font-semibold mb-4">Trending Datasets (Updated)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-purple-500 font-semibold mb-1">
               <a href="https://www.kaggle.com/discussions/general/274167" 
              className="text-blue-600 underline">Kaggle's Hot Trending Sets</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
