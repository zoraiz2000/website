import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const Intro = ({className}) => {

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/zoraizkhan2000/",
            icon: FaLinkedin,
        },
        {
            href: "https://github.com/zoraiz2000",
            icon: FaGithub,
        },
        {
            href: "mailto:zoraiz.khan@ucalgary.ca",
            icon: PiMicrosoftOutlookLogoFill,
        },
    ];

  return (
    <div className={`flex flex-col flex-wrap items-center justify-between ${className} p-4 rounded-xl bg-[rgba(8,18,36,0.95)]                     
                     dark:border dark:border-[rgba(59,130,246,0.1)] min-w-[355px] max-w-[400px]`}>
       
        {/* Image Flip Container */}
        <div className="flip-card mt-4 sm:w-44 sm:h-44">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img 
                src="/me.jpg" 
                alt="profile picture" 
                className="rounded-full w-40 h-40 sm:w-44 sm:h-44 object-cover 
                         border-2 border-[rgba(59,130,246,0.3)] shadow-md shadow-[rgba(59,130,246,0.1)]"
              />
            </div>
            <div className="flip-card-back">
              <img 
                src="/secondary.jpg" 
                alt="old profile picture" 
                className="rounded-full w-40 h-40 sm:w-44 sm:h-44 object-cover 
                         border-2 border-[rgba(59,130,246,0.3)] shadow-md shadow-[rgba(59,130,246,0.1)]"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="flex mt-4 items-center justify-center text-white text-xl md2:text-2xl font-poppins font-extrabold" >
            Zoraiz Khan
        </div>

        {/* Occupation */}
        <div className ="font-bold font-poppins text-blue-500 text-md md2:text-lg">
        &lt; SOFTWARE ENGINEER /&gt;
        </div>


        {/* Education */}
        <div className="flex flex-col mx-4 mt-4 px-4 py-3 gap-2 items-center text-white 
                        bg-[rgba(30,41,59,0.4)] border border-[rgba(59,130,246,0.15)] 
                        rounded-lg font-poppins s">
            <div className="flex flex-col text-xs gap-1">
                
                <div className="flex flex-row text-[.73rem] leading-[1.3rem] justify-between gap-6">
                    <div className="flex flex-col">
                        <div>
                            BSc. Computer Science
                        </div>
                        <div className="text-blue-400">
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
                            <GiGraduateCap className="text-xl text-blue-400" />
                            2024
                        </div>
                    </div>
                </div>
            </div>
        </div>

                    
        {/* Socials */}
        <div className="flex flex-row mx-auto mb-2 mt-6 gap-5">
            {socialLinks.map(({ href, icon: Icon }, index) => (
                <a
                    key={index}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-1 rounded-lg bg-[rgba(30,41,59,0.6)] hover:bg-[rgba(30,41,59,1)] transition-all duration-300"
                >
                    <Icon className="w-8 h-8 p-1.5 fill-[rgba(255,255,255,0.5)] hover:fill-[rgba(255,255,255,1)] transition-all duration-300 ease-in-out cursor-pointer" />
                </a>
            ))}
        </div>
    </div>
  )
}

export default Intro