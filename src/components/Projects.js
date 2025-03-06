import React, { useState, useRef, useEffect } from 'react';
import { HiExternalLink } from "react-icons/hi";
import { FaChevronDown, FaChevronUp, FaDesktop, FaGithub } from "react-icons/fa";

// Project Card
const ProjectCard = ({ title, description, tools, link, website }) => (
  <div className='flex flex-col justify-between max-w-[610px] p-4 rounded-xl hover:bg-[rgb(255,255,255,0.1)] hover:cursor-pointer'>
    <div className="flex flex-row items-center justify-between gap-2 text-blue-400 text-lg md2:text-xl font-bold">
      {title}
      <div className='flex flex-row items-center gap-2 '>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <HiExternalLink className='text-2xl hover:bg-[rgba(255,255,255,0.1)] p-1.5 box-content rounded-full transition-all duration-200'/>
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <FaDesktop className='text-lg hover:bg-[rgba(255,255,255,0.1)] p-1.5 box-content rounded-lg transition-all duration-200'/>
        </a>
      )}
      </div>
      
    </div>
    <div className="flex flex-row justify-between">
      <div className="max-w-[512px]">
        <div className="mt-4 text-xs md2:text-sm text-[rgba(255,255,255,0.8)] font-normal">
          {description}
        </div>
        <div className="mt-4 text-xs md2:text-sm text-[rgba(255,255,255,0.8)] font-normal">
          {tools}
        </div>
      </div>
    </div>
  </div>
);

const Projects = ({ ref, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef(null);

  const projects = [
    {
      title: "GPTStir",
      description: `An AI chatbot platform that allows users to interact with multiple AI models, including OpenAI, Anthropic, xAI, and DeepSeek. 
                    Features OAuth 2.0 authentication for secure sign-in and enables seamless model switching for each query.`,
      tools: "React (Vite) • Node.js (Express) • PostgreSQL (AWS RDS) • OAuth 2.0 • OpenAI API • Anthropic API • xAI API • DeepSeek API",
      website: "https://gptstir.com",
      link: "https://github.com/zoraiz2000/gptstir-frontend",
    },    
    {
      title: "Portfolio Website",
      description: `This website is a sleek and professional space showcasing my skills, projects, and experience. It features a detailed 
                    resume, project highlights, and a comprehensive overview of my technical expertise.`,
      tools: "React • Next.js • Tailwind CSS",
      website: "https://zoraizkhan.website",
      link: "https://github.com/zoraiz2000/website",
    },
    {
      title: "Rycho",
      description: `React is a music-focused social media app where users can share Spotify songs and albums, discover new tracks, and 
                    connect through real-time interactions like comments, reactions, and music recommendations.`,
      tools: "React • Next.js • Node.js • Tailwind CSS • MongoDB • Spotify API",
      link: "https://github.com/zoraiz2000/rycho",
    },
    {
      title: "Volumetric Live Streaming",
      description: `Developed and optimized a volumetric live-streaming video system using Node.js, focusing on benchmarking and performance enhancements.
                    Leveraged Docker for platform independence and modular design for future scalability. Findings and improvements are 
                    detailed in a research paper.`,
      tools: "Academic Research • Docker • Javascript • Node.js • Express",
      link: "https://github.com/zoraiz2000/Volumetric-live-streaming-video",
    },
    {
      title: "Byte Size",
      description: `A mobile web application for restaurant ordering systems using Blazor. This project emphasizes the principles of 
                    Human-Computer Interaction (HCI) by delivering a seamless and intuitive user experience. It focuses on enhancing usability and
                    reducing operational friction, and ensuring accessibility for users.`,
      tools: "Blazor • C# • .NET • HTML • CSS • HCI",
      link: "https://github.com/zoraiz2000/ByteSize-MobileWebApp",
    },
    {
      title: "Mock Indie Game Distribution Platform",
      description: `This project provides a dedicated platform for indie game developers to promote their creations. This project
                    demonstrates my understanding of relational models and my proficiency in utilizing MySQL for efficient user data management.`,
      tools: "MySQL • HTML • CSS • PHP",
      link: "https://github.com/zoraiz2000/Game-Platform-DBMS",
    },
    {
      title: "Multithreaded Games",
      description: `This project demonstrates skills in multithreading, including thread creation, synchronization, and shared resource 
                    management in C. It highlights the ability to coordinate multiple threads effectively and manage real-time processes reliably.`,
      tools: "C language • Multi-threading",
      link: "https://github.com/zoraiz2000/Multithreaded-Games", 
    },
    {
      title: "Course Feedback Analysis System",
      description: `A machine learning-based system using Python to analyze student feedback and recommend courses. This project
                    showcases expertise in decision trees, information gain, and data-driven insights.`,
      tools: "Python • Pandas • Machine Learning",
      link: "https://github.com/zoraiz2000/Course-Feedback-Analysis"
    },
    
  ];

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight); // Dynamically calculate the height
    }
  }, [contentRef]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div ref={ref} className={`${className}`}>
      <div className="font-poppins text-4xl md2:text-6xl">
        <span className="block text-white font-extrabold">Personal</span>
        <span className="block text-blue-500 font-extrabold">Projects</span>
        <hr className="my-3 border-stone-50/30 w-[100%]" />

        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        <div
          ref={contentRef}
          style={{
            maxHeight: isExpanded ? `${maxHeight}px` : "0px",
          }}
          className="overflow-hidden transition-[max-height] duration-1000 ease-in-out"
        >
          {projects.slice(2).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div
          className="flex items-center justify-center mt-4 py-3 rounded-md cursor-pointer text-blue-500 hover:bg-[rgb(255,255,255,0.1)] hover:text-blue-400 transition duration-300"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <>
              <span className="mr-2 text-sm">Show Less</span>
              <FaChevronUp className="text-sm" />
            </>
          ) : (
            <>
              <span className="mr-2 text-sm">Show More</span>
              <FaChevronDown className="text-sm" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
