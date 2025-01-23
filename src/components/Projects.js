import React from 'react'
import { HiExternalLink } from "react-icons/hi";


const Projects = ({ref, className}) => {

  const projects = [
    { 
      title: "Rycho", 
      description: `Developed a social media React TypeScript application integrating Spotify API and MongoDB, enabling users to share,
                    post, and stream music, comment on posts, and follow other users, enhancing user engagement with music-focused
                    interactions.`, 
      tools: "Jan 2024 - April - 2024" 
    },
    { 
      title: "Byte Size", 
      description: `Created a mobile web application for restaurant ordering systems using Blazor with C# and .NET, delivering a seamless and
                    consistent user experience across Android and iOS platforms, reducing operational delays and improving customer
                    satisfaction.`, 
                    tools: "Jan 2023 - April - 2023" 
    },
  ];
  

  return (
    <div ref={ref} className={`${className}`}>
      <div className='font-poppins text-4xl md2:text-6xl'>
        <span className="block text-white font-extrabold">Personal</span>
        <span className="block text-blue-500 font-extrabold">Projects</span>
        <hr className="my-3 border-stone-50/30 w-[73%]"></hr>
        {projects.map(({ title, description, tools }, index) => (
          <div 
            key={index}
            className="flex flex-row justify-between group max-w-[610px] p-4 rounded-xl hover:bg-[rgb(30,30,30)] hover:cursor-pointer"
          >
            <div className="">
              <div className="flex flex-row items-center gap-2 text-lg md2:text-xl font-bold">
                {title}
                <HiExternalLink className="group-hover:bg-[rgba(255,255,255,0.1)] p-2 box-content rounded-full transition-all duration-200"/>
              </div>
              <div className="flex flex-row justify-between">
                <div className="max-w-[512px]">
                  <div className="mt-4 text-xs md2:text-sm text-[rgb(150,140,140)] font-normal">
                    {description}
                  </div>
                  <div className="mt-4 text-xs md2:text-sm text-[rgb(150,140,140)] font-normal">
                    {tools}
                  </div>
                </div>
              </div>
            </div>
          </div>   
        ))}     
      </div>
    </div>
  )
}

export default Projects