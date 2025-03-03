import React, { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Skills = ({ ref, className }) => {

  const [openSections, setOpenSections] = useState({
    Languages: true,
    Frameworks: false,
    "Developer Tools / Technologies": false,
    Databases: false,
  });

  const contentRefs = {
    Languages: useRef(null),
    Frameworks: useRef(null),
    "Developer Tools / Technologies": useRef(null),
    Databases: useRef(null),
  };

  const toggleSection = (title) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const languages = [
    { text: "JavaScript", path: "/skills/languages/javascript.png", years: "Advanced" },
    { text: "Java", path: "/skills/languages/java.png", years: "Advanced" },    
    { text: "HTML", path: "/skills/languages/html.png", years: "Advanced" },
    { text: "CSS", path: "/skills/languages/css.png", years: "Advanced" },
    { text: "Python", path: "/skills/languages/python.png", years: "Intermediate" },    
    { text: "C", path: "/skills/languages/c.png", years: "Intermediate" },
    { text: "TypeScript", path: "/skills/languages/typescript.png", years: "Intermediate" },    
    { text: "PHP", path: "/skills/languages/php.png", years: "Beginner" },
    
  ];

  const frameworks = [
    { text: "React", path: "/skills/frameworks/react.png", years: "Advanced" },
    { text: "Next", path: "/skills/frameworks/next.png", years: "Advanced" },
    { text: "Node", path: "/skills/frameworks/node.png", years: "Advanced" },
    { text: "Express", path: "/skills/frameworks/express.png", years: "Intermediate" },
    { text: ".Net", path: "/skills/frameworks/net.png", years: "Beginner" },
  ];
  
  const tools = [
    { text: "Git", path: "/skills/tools/git.png", years: "Advanced" },
    { text: "REST API", path: "/skills/tools/rest.png", years: "Intermediate" },
    { text: "AWS", path: "/skills/tools/aws.png", years: "Beginner" },
    { text: "Docker", path: "/skills/tools/docker.png", years: "Beginner" },
    { text: "Jira", path: "/skills/tools/jira.png", years: "Beginner" },    
  ];

  const databases = [
    { text: "MySQL", path: "/skills/databases/mysql.png", years: "Advanced" },
    { text: "MongoDB", path: "/skills/databases/mongodb.png", years: "Advanced" },
    { text: "PostgreSQL", path: "/skills/databases/postgresql.png", years: "Intermediate" },
  ];

  const renderSkillsCategory = (title, skills) => {
    const contentRef = contentRefs[title];

    return (
      <div className={`${title !== "Languages" ? "mt-2" : ""}`}>
        <div
          className="flex justify-between p-2 rounded-md items-center group text-md md2:text-xl font-poppins font-bold cursor-pointer hover:bg-[rgb(255,255,255,0.1)] transition duraiton-300"
          onClick={() => toggleSection(title)}
        >
          <span>{title}</span>
          <span
            className={`text-4xl group-hover:text-[rgba(255,255,255,2)] rounded-full transform transition-all ease-in-out duration-300 ${
              openSections[title] ? "rotate-0 text-[rgba(255,255,255,1)]" : "-rotate-90 text-[rgba(255,255,255,0.5)]"
            }`}
          >
            <IoMdArrowDropdown/>
            {/* ▼ */}
          </span>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
          style={{
            height: openSections[title] ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
        >
          <div className="flex flex-wrap gap-x-4 mt-4">
            {skills.map(({ text, path, years }, index) => (
              <div
                key={index}
                className="flex flex-row w-[256px] hover:bg-[rgb(255,255,255,0.1)] p-3 rounded-xl transition duration-200 cursor-default"
              >
                <div className="w-7 h-7 md2:w-14 md2:h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_5px_1px_rgba(0,0,0,0.8)]">
                  <img src={path} alt="skill" className="w-4 h-4 md2:w-8 md2:h-8" />
                </div>
                <div className="flex flex-col pl-5 justify-center font-poppins">
                  <div className="text-sm md2:text-lg font-bold">{text}</div>
                  <div className="text-xs md2:text-sm text-[rgb(150,140,140)]">{years}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={ref} className={`${className}`}>
      <div className="font-poppins font-extrabold text-4xl md2:text-6xl">
        <span className="block text-white">Technical</span>
        <span className="block text-blue-500">Skills</span>
      </div>
      <hr className="my-3 border-stone-50/30 w-[100%]" />
      {renderSkillsCategory("Languages", languages)}
      {renderSkillsCategory("Frameworks", frameworks)}
      {renderSkillsCategory("Developer Tools / Technologies", tools)}
      {renderSkillsCategory("Databases", databases)}      
    </div>
  );
};

export default Skills;
