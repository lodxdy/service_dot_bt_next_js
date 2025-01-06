// "use client";
// import React, { useState } from "react";
// import Footer from "@/app/components/Footer";
// import Navbar from "@/app/components/NavBar";

// // Dummy Job Data
// const jobData = [
//   {
//     id: 1,
//     title: "Web Developer Needed",
//     description:
//       "Build and maintain a fully responsive e-commerce platform for our brand.",
//     budget: "BTN 20k",
//     avgBid: "Avg Bid",
//   },
//   {
//     id: 2,
//     title: "Graphic Designer for Logo",
//     description:
//       "Design a professional logo for our startup. Experience with vector graphics is preferred.",
//     budget: "BTN 15k",
//     avgBid: "Avg Bid",
//   },
//   {
//     id: 3,
//     title: "SEO Expert for Website",
//     description:
//       "Improve website SEO rankings and optimize on-page content for search engines.",
//     budget: "BTN 25k",
//     avgBid: "Avg Bid",
//   },
//   {
//     id: 4,
//     title: "Content Writer Needed",
//     description:
//       "Write high-quality blog posts for our tech company. Topics include AI, ML, and cloud computing.",
//     budget: "BTN 12k",
//     avgBid: "Avg Bid",
//   },
//   {
//     id: 5,
//     title: "UI/UX Designer",
//     description:
//       "Redesign our mobile app with a focus on usability and a clean design approach.",
//     budget: "BTN 30k",
//     avgBid: "Expert",
//   },
// ];

// const FindJobsPage = () => {
//   const [jobs, setJobs] = useState(jobData);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({ budgetMin: "", budgetMax: "" });
//   const [error, setError] = useState(""); // To store error messages

//   // Handle Search
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     filterJobs(value, filters.budgetMin, filters.budgetMax);
//   };

//   // Handle Budget Filtering
//   const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     let updatedValue = value;

//     // If the value is negative and it's for budgetMin, set it to 0
//     if (name === "budgetMin" && parseInt(value) < 0) {
//       updatedValue = "0"; // prevent negative budget
//       setError("Minimum budget cannot be negative.");
//     } else if (name === "budgetMax" && parseInt(value) < 0) {
//       updatedValue = "0"; // prevent negative budget
//       setError("Maximum budget cannot be negative.");
//     } else {
//       setError(""); // Clear error if value is valid
//     }

//     const updatedFilters = { ...filters, [name]: updatedValue };
//     setFilters(updatedFilters);
//     filterJobs(searchTerm, updatedFilters.budgetMin, updatedFilters.budgetMax);
//   };

//   // Filter Jobs Function
//   const filterJobs = (
//     search: string,
//     budgetMin: string,
//     budgetMax: string
//   ) => {
//     let filteredJobs = jobData;

//     if (search) {
//       filteredJobs = filteredJobs.filter((job) =>
//         job.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (budgetMin || budgetMax) {
//       const min = budgetMin ? parseInt(budgetMin) : 0;
//       const max = budgetMax ? parseInt(budgetMax) : Infinity;

//       filteredJobs = filteredJobs.filter((job) => {
//         const budgetValue = parseInt(job.budget.replace("BTN ", ""));
//         return budgetValue >= min && budgetValue <= max;
//       });
//     }

//     setJobs(filteredJobs);
//   };

//   // Clear Filters
//   const clearFilters = () => {
//     setSearchTerm("");
//     setFilters({ budgetMin: "", budgetMax: "" });
//     setJobs(jobData); // Reset jobs to the original data
//     setError(""); // Clear any error
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="min-h-screen">
//         {/* Navbar */}
//         <Navbar />
//         {/* Header */}
//         <header className="bg-white shadow-sm py-6 px-6 mb-4 mt-16 ">
//           <h1 className="text-3xl font-bold text-orange-500 mb-2">Find jobs!</h1>
//           <p className="text-sm text-gray-600">
//             Find jobs that match your skills and budget and bid for them.
//           </p>
//         </header>

//         {/* Content */}
//         <div className="flex flex-col md:flex-row gap-6 mx-6">
//           {/* Filter Sidebar */}
//           <aside className="w-full md:w-1/3 bg-white shadow-sm rounded-lg p-5 space-y-6">
//             <div>
//               <label className="block font-medium mb-2">Search keyword</label>
//               <input
//                 type="text"
//                 placeholder="Search for jobs..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 className="w-full border rounded px-4 py-2 focus:outline-orange-500"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-2">Budget</label>
//               <div className="flex gap-2">
//                 <input
//                   type="number"
//                   name="budgetMin"
//                   placeholder="Min"
//                   value={filters.budgetMin}
//                   onChange={handleBudgetChange}
//                   className="w-1/2 border rounded px-3 py-2 focus:outline-orange-500"
//                 />
//                 <input
//                   type="number"
//                   name="budgetMax"
//                   placeholder="Max"
//                   value={filters.budgetMax}
//                   onChange={handleBudgetChange}
//                   className="w-1/2 border rounded px-3 py-2 focus:outline-orange-500"
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500 text-sm">{error}</p>} {/* Error message */}
//           </aside>

//           {/* Job Listings */}
//           <section
//             className="sticky w-full md:w-2/3 space-y-6"
//             style={{
//               backgroundImage: "url('/Artboard.png')",
//               backgroundSize: "cover",
//               backgroundAttachment: "fixed",
//               backgroundPosition: "center",
//             }}
//           >
//             <p className="text-gray-600">{jobs.length} jobs found</p>
//             {jobs.length > 0 ? (
//               jobs.map((job) => (
//                 <div
//                   key={job.id}
//                   className="bg-transparent-30% shadow-sm rounded-lg p-5 flex justify-between items-start mb-4"
//                 >
//                   <div>
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       {job.title}
//                     </h2>
//                     <p className="text-sm text-gray-600 mt-2">
//                       {job.description}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-orange-500 font-semibold text-lg">
//                       {job.budget}
//                     </p>
//                     <p className="text-gray-500 text-sm">{job.avgBid}</p>
//                     <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition-all duration-300">
//                       Bid now
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="flex flex-col justify-center items-center space-y-4 py-8">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-16 w-16 text-gray-500"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 3a7 7 0 11-7 7 7 7 0 017-7zm0-1a8 8 0 100 16A8 8 0 0010 2zm3 10a3 3 0 11-6 0 3 3 0 016 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <p className="text-gray-500 text-lg">
//                   No jobs match your criteria.
//                 </p>
//                 <button
//                   onClick={clearFilters}
//                   className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-700 transition-all duration-300"
//                 >
//                   Clear Filters
//                 </button>
//               </div>
//             )}
//           </section>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default FindJobsPage;
"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import axios from "axios";

const FindJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ budgetMin: "", budgetMax: "" });
  const [error, setError] = useState(""); // To store error messages

  // Fetch Jobs from Backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs'); // Replace with your actual API endpoint
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs. Please try again later.");
      }
    };

    fetchJobs();
  }, []);

  // Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterJobs(value, filters.budgetMin, filters.budgetMax);
  };

  // Handle Budget Filtering
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (parseInt(value) < 0) {
      updatedValue = "0"; // Prevent negative budget
      setError(`${name} cannot be negative.`);
    } else {
      setError(""); // Clear error if value is valid
    }

    const updatedFilters = { ...filters, [name]: updatedValue };
    setFilters(updatedFilters);
    filterJobs(searchTerm, updatedFilters.budgetMin, updatedFilters.budgetMax);
  };

  // Filter Jobs Function
  const filterJobs = (
    search: string,
    budgetMin: string,
    budgetMax: string
  ) => {
    let filteredJobs = jobs;

    if (search) {
      filteredJobs = filteredJobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (budgetMin || budgetMax) {
      const min = budgetMin ? parseInt(budgetMin) : 0;
      const max = budgetMax ? parseInt(budgetMax) : Infinity;

      filteredJobs = filteredJobs.filter((job) => {
        const budgetValue = parseInt(job.budget.replace("BTN ", ""));
        return budgetValue >= min && budgetValue <= max;
      });
    }

    setJobs(filteredJobs);
  };

  // Clear Filters
  const clearFilters = () => {
    setSearchTerm("");
    setFilters({ budgetMin: "", budgetMax: "" });
    // Fetch all jobs again to reset the list
    axios.get('/api/jobs').then(response => setJobs(response.data));
    setError(""); // Clear any error
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* Header */}
        <header className="bg-white shadow-sm py-6 px-6 mb-4 mt-16">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">Find jobs!</h1>
          <p className="text-sm text-gray-600">
            Find jobs that match your skills and budget and bid for them.
          </p>
        </header>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 mx-6">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-1/3 bg-white shadow-sm rounded-lg p-5 space-y-6">
            <div>
              <label className="block font-medium mb-2">Search keyword</label>
              <input
                type="text"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full border rounded px-4 py-2 focus:outline-orange-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Budget</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="budgetMin"
                  placeholder="Min"
                  value={filters.budgetMin}
                  onChange={handleBudgetChange}
                  className="w-1/2 border rounded px-3 py-2 focus:outline-orange-500"
                />
                <input
                  type="number"
                  name="budgetMax"
                  placeholder="Max"
                  value={filters.budgetMax}
                  onChange={handleBudgetChange}
                  className="w-1/2 border rounded px-3 py-2 focus:outline-orange-500"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </aside>

          {/* Job Listings */}
          <section
            className="sticky w-full md:w-2/3 space-y-6"
            style={{
              backgroundImage: "url('/Artboard.png')",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }}
          >
            <p className="text-gray-600">{jobs.length} jobs found</p>
            {jobs.length > 0 ? (
              jobs.map((job: any) => (
                <div
                  key={job.id}
                  className="bg-transparent-30% shadow-sm rounded-lg p-5 flex justify-between items-start mb-4"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {job.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                      {job.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-500 font-semibold text-lg">
                      {job.budget}
                    </p>
                    <p className="text-gray-500 text-sm">{job.avgBid}</p>
                    <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition-all duration-300">
                      Bid now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center space-y-4 py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 11-7 7 7 7 0 017-7zm0-1a8 8 0 100 16A8 8 0 0010 2zm3 10a3 3 0 11-6 0 3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-500 text-lg">
                  No jobs match your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default FindJobsPage;