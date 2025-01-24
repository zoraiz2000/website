import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const Intro = ({className}) => {
  return (
    <div className={`flex flex-col py-4 flex-wrap rounded-2xl items-center justify-between bg-[rgb(53,52,51)] ${className}`}>
       
        {/* Image   */}
        <img 
        src="/me.jpg" 
        alt="profile picture" 
        className="mt-4 rounded-full w-28 h-28 sm:w-44 sm:h-44 transition-transform duration-300 hover:scale-105 relative z-10 object-cover hover:cursor-pointer"
        />

        {/* Name */}
        <div className="flex mt-4 items-center justify-center text-white text-xl md2:text-2xl font-poppins font-extrabold" >
            Zoraiz Khan
        </div>

        {/* Occupation */}
        <div className ="font-bold font-poppins text-blue-500 text-md md2:text-lg">
        &lt; SOFTWARE ENGINEER /&gt;
        </div>

        <hr className='border-stone-50/30 w-[90%]'></hr>

        {/* Education */}
        <div className="flex flex-col px-4 py-2 gap-2 items-center text-white font-poppins">
            <div className="flex flex-col text-xs gap-1">
                
                <div className="flex flex-row text-md md2:text-[.9rem] md2:leading-[1.3rem] justify-between gap-6">
                    <div className="flex flex-col">
                        <div>
                            BSc. Computer Science
                        </div>
                        <div>
                            Software Engineering
                        </div>
                        <div>
                            University of Calgary
                        </div>
                    </div>
                    <div className="flex flex-col text-[.73rem]">
                        <div>
                            (Major)
                        </div>
                        <div>
                            (Concentration)
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <GiGraduateCap className="text-2xl text-[rgba(0,0,0,0.6)]" />
                            2024
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className='border-stone-50/30 w-[90%]'></hr>

        {/* Greetings */}
        {/* <div className="my-4 font-poppins text-center text-white-500 text-xs sm:text-xs md:text-md xl:text-[0.8rem]">
        Explore around!
        </div> */}
                    
        {/* Socials */}
        <div className="flex flex-row mx-auto mb-2 mt-4 gap-10">
        <a
            href="https://www.linkedin.com/in/zoraizkhan2000/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <FaLinkedin className='w-6 h-6 fill-[rgba(255,255,255,0.5)] hover:fill-white transition-all duration-300 ease-in-out cursor-pointer'/>
        </a>
        <a
            href="https://github.com/zoraiz2000" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <FaGithub className='w-6 h-6 fill-[rgba(255,255,255,0.5)] hover:fill-white transition-all duration-300 ease-in-out cursor-pointer'/>
        </a>
        <a 
            href="mailto:zoraiz.khan@ucalgary.ca"
        >
            <PiMicrosoftOutlookLogoFill className='w-6 h-6 fill-[rgba(255,255,255,0.5)] hover:fill-white transition-all duration-300 ease-in-out cursor-pointer'/>
        </a>
        </div>
    </div>
  )
}

export default Intro