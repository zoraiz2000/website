"use client"
import React from "react";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";
import { IoIosFolderOpen } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Tooltip } from "./Tooltip";


const Navbar = ({ sectionRefs }) => {
  
  const tooltipItems = [
    { infoText: "About", Icon: FaUser, w:4, h:4, ref: sectionRefs.aboutRef },
    { infoText: "Resume", Icon: IoDocumentTextSharp, w:5 , h:5,  ref: sectionRefs.resumeRef },
    { infoText: "Skills", Icon: RiToolsFill, w:6, h:6,  ref: sectionRefs.skillsRef },
    { infoText: "Projects", Icon: IoIosFolderOpen, w:5, h:5,  ref: sectionRefs.projectsRef },
    { infoText: "Contact", Icon: IoCall, w:5, h:5,  ref: sectionRefs.contactRef },
  ];

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed left-0 right-0 mt-5 p-2 z-20 rounded-full mx-auto max-w-xs bg-[rgb(53,52,51)]
      dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
    >
      <div className="flex flex-row justify-center items-center gap-x-9">
          {tooltipItems.map(({ infoText, Icon, ref, w, h }, index) => (
            <Tooltip key={index} infoText={infoText}>
              <button onClick={() => handleScroll(ref)}>
                <Icon className={`w-${w} h-${h} fill-[rgba(255,255,255,0.5)] hover:fill-white hover:mx-2 transition-all duration-300 ease-in-out cursor-pointer`}/>
              </button>
            </Tooltip>
          ))}   
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  sectionRefs: PropTypes.shape({
    aboutRef: PropTypes.object.isRequired,
    resumeRef: PropTypes.object.isRequired,
    skillsRef: PropTypes.object.isRequired,
    projectsRef: PropTypes.object.isRequired,
    contactRef: PropTypes.object.isRequired,
  }).isRequired,
};

export default Navbar;
