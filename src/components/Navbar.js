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
    { infoText: "About", Icon: FaUser, w:1.2, h:1.2, ref: sectionRefs.aboutRef },
    { infoText: "Resume", Icon: IoDocumentTextSharp, w:1.4, h:1.4,  ref: sectionRefs.resumeRef },
    { infoText: "Skills", Icon: RiToolsFill, w:1.5, h:1.5,  ref: sectionRefs.skillsRef },
    { infoText: "Projects", Icon: IoIosFolderOpen, w:1.35, h:1.35,  ref: sectionRefs.projectsRef },
    { infoText: "Contact", Icon: IoCall, w:1.2, h:1.2,  ref: sectionRefs.contactRef },
  ];

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed left-0 right-0 mt-5 p-3 z-20 rounded-full mx-auto max-w-xs bg-[rgba(8,18,36,0.95)]
      dark:border dark:border-[rgba(59,130,246,0.3)] dark:shadow-[0_-20px_40px_-20px_rgba(59,130,246,0.1)_inset] backdrop-blur-sm"
    >
      <div className="flex flex-row justify-center items-center gap-x-9">
          {tooltipItems.map(({ infoText, Icon, ref, w, h }, index) => (
            <Tooltip key={index} infoText={infoText}>
              <button onClick={() => handleScroll(ref)}>
                <Icon 
                  style={{ width: `${w}rem`, height: `${h}rem` }}
                  className={`fill-[rgba(255,255,255,0.5)] hover:fill-white hover:mx-2 transition-all duration-300 ease-in-out cursor-pointer`}
                />
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
