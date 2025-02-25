// "use client"; // Required in Next.js App Router
// import Link from "next/link";
// import React, { useEffect } from "react";

// const Hero: React.FC = () => {
//   useEffect(() => {
//     // Scroll-triggered animations with IntersectionObserver
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           entry.target.classList.toggle(
//             "opacity-100 translate-y-0",
//             entry.isIntersecting
//           );
//           entry.target.classList.toggle("opacity-0 translate-y-10", !entry.isIntersecting);
//         });
//       },
//       { threshold: 0.2 } // Trigger when 20% of the element is visible
//     );

//     document.querySelectorAll(".animate-card").forEach((el) => observer.observe(el));
//   }, []);

//   return (
//     <div>
//       {/* Hero Section One */}
//       <section id="hero" className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
//         {/* Video Background */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           poster="/placeholder.jpg" // Optional: Lazy load poster
//         >
//           <source src="vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 leading-snug">
//             Are you looking for <br />
//             <span className="text-orange-600">Freelancers?</span>
//           </h1>
//           <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
//             Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice.
//           </p>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-wrap justify-center gap-4">
//           <Link href="/pages/Client/Post">
//   <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
//     Hire a freelancer
//   </button>
// </Link>
// <Link href="/pages/ServiceProvider/FindJobs">
//   <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition">
//     Start Earning
//   </button>
// </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Hero;
'use client';

import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, Users, Briefcase } from "lucide-react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden"  
    style={{ 
    height: "125vh",
    transformOrigin: "top left", }}>
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          // poster="/placeholder.jpg" // Optional: Lazy load poster
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40" />*/}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="block text-orange-500 drop-shadow-lg">
              Are you looking for
            </span>
            <span className="block text-orange-600 drop-shadow-lg mt-2">
              Freelancers?
            </span>
          </h1>

          {/* Hero Description */}
          <p className="mt-6 text-base md:text-xl text-gray-50 max-w-2xl mx-auto leading-relaxed">
            Hire Great Freelancers, Fast. Spacelance helps you hire elite 
            freelancers at a moment's notice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            <Link href="/pages/Client/Post">
              <button className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 
                               bg-orange-500 text-white rounded-lg font-medium 
                               transition-all duration-200 ease-in-out
                               hover:bg-orange-600 hover:scale-105 
                               focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Hire a Freelancer
                <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/pages/ServiceProvider/FindJobs">
              <button className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 
                               bg-transparent border-2 border-orange-500 text-orange-500 rounded-lg font-medium 
                               transition-all duration-200 ease-in-out
                               hover:bg-white hover:text-black hover:scale-105
                               focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Start Earning
                <Briefcase className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-orange-500 animate-bounce opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default Hero;