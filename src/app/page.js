"use client"
import React, { useRef, useEffect } from 'react';

import Intro from '@/components/Intro';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from "@/components/Navbar";
import About from '@/components/About';


export default function Home() {

  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Add Google Analytics script dynamically
  useEffect(() => {
    // Add Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`; 
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID); 
  }, []);

  return (
    <div className="">
      <Navbar
        sectionRefs={{
          aboutRef,
          resumeRef,
          skillsRef,
          projectsRef,
          contactRef,
        }}
      />

      <div className="flex flex-col items-center pt-28 gap-20 justify-center md2:flex-row md2:items-start">
        {/* Intro Section */}
        <div className="flex items-center justify-center w-full md2:w-auto">
          <Intro className="w-full md2:w-auto md2:fixed mx-20 md2:top-28 md2:mr-72"/>
        </div>
          
        <div className="flex flex-col px-10 max-w-4xl">

          {/* About Section */}
          <About ref={aboutRef} className='pb-8 max-w-2xl'/>

          {/* Resume */}
          <Resume ref={resumeRef} className="py-8 mb-12 h-[90vh] w-full"/>

          {/* Skills */}
          <Skills ref={skillsRef} className="py-8 w-full"/>

          {/* Personal Projects */}
          <Projects ref={projectsRef} className="py-8 w-full"/>

          {/* Contact Me */}
          <Contact ref={contactRef} className="py-8 w-full"/>
          

          <div className="flex flex-col items-center">
            <img src="/me.png" alt="Me SVG" className="w-26 h-32 mb-4 ml-8" />
            <p className="mb-24 font-poppins text-center text-sm text-[rgba(255,255,255,0.7)]">
              © 2024 Zoraiz Khan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
