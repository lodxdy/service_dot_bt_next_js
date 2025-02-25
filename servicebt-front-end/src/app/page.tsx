"use client"
import React, { useState, useEffect } from "react";
import Navbar from '@/components/NavBar/NavBar';
import Footer from '@/components/Shared/Footer';
import Hero from '@/components/Hero/Hero';
import Categories from '@/components/Hero/Category';
import Portfolio from '@/components/Hero/portfolio';
// import HeroTwo from '@/app/components/Landing/HeroTwo';
import Sidebar from '@/components/Hero/Sidebar';
import TabSection from "@/components/AboutUsBox/TabSection";
import Loading from "@/components/Shared/Loading";
import Image from 'next/image';


const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  
    <div className="font-sans" >    
      {/* Pass the scrolled prop to Navbar */}
      <Navbar />
      <div
      className="sticky"
    >
      {/* Sidebar for Vertical Line and Dots */}
      <Sidebar />

      {/* Main Sections */}
      <Hero />
      <Categories />
      {/* <Portfolio /> */}
  
      <Footer />
    </div>
  </div>
  );
};

export default LandingPage;
