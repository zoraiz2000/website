import React, { useState, useRef } from "react";

const Skills = ({ ref, className }) => {

  const [openSections, setOpenSections] = useState({
    Languages: true,
    Frameworks: false,
    "Developer Tools": false,
    Databases: false,
  });

  const contentRefs = {
    Languages: useRef(null),
    Frameworks: useRef(null),
    "Developer Tools": useRef(null),
    Databases: useRef(null),
  };

  const toggleSection = (title) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const languages = [
    { text: "JavaScript", path: "/skills/languages/javascript.png", years: "4+ Years" },
    { text: "Java", path: "/skills/languages/java.png", years: "4+ Years" },    
    { text: "HTML", path: "/skills/languages/html.png", years: "4+ Years" },
    { text: "CSS", path: "/skills/languages/css.png", years: "4+ Years" },
    { text: "Python", path: "/skills/languages/python.png", years: "3+ Years" },    
    { text: "PHP", path: "/skills/languages/php.png", years: "2+ Years" },
    { text: "C", path: "/skills/languages/c.png", years: "2+ Years" },
    { text: "TypeScript", path: "/skills/languages/typescript.png", years: "1+ Year" },    
    
  ];

  const frameworks = [
    { text: "React", path: "/skills/frameworks/react.png", years: "3+ Years" },
    { text: "Next", path: "/skills/frameworks/next.png", years: "3+ Years" },
    { text: "Node", path: "/skills/frameworks/node.png", years: "3+ Years" },
    { text: ".Net", path: "/skills/frameworks/net.png", years: "1+ Year" },
  ];
  
  const tools = [
    { text: "Git", path: "/skills/tools/git.png", years: "3+ Years" },
    { text: "Docker", path: "/skills/tools/docker.png", years: "1+ Years" },
    { text: "Jira", path: "/skills/tools/jira.png", years: "1+ Years" },
  ];

  const databases = [
    { text: "MySQL", path: "/skills/databases/mysql.png", years: "4+ Years" },
    { text: "MongoDB", path: "/skills/databases/mongodb.png", years: "3+ Years" },
  ];

  const renderSkillsCategory = (title, skills) => {
    const contentRef = contentRefs[title];

    return (
      <div className={`${title !== "Languages" ? "mt-6" : ""}`}>
        <div
          className="flex justify-between items-center group text-md md2:text-xl font-poppins font-bold cursor-pointer"
          onClick={() => toggleSection(title)}
        >
          <span>{title}</span>
          <span
            className={`bg-none group-hover:bg-[rgba(255,255,255,0.1)] rounded-full px-1 transform transition-all ease-in-out duration-300 ${
              openSections[title] ? "rotate-0" : "-rotate-90"
            }`}
          >
            ▼
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
                className="flex flex-row w-[256px] hover:bg-[rgb(30,30,30)] p-3 rounded-xl transition duration-200 cursor-default"
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
      <hr className="my-3 border-stone-50/30 w-[80%]" />
      {renderSkillsCategory("Languages", languages)}
      {renderSkillsCategory("Frameworks", frameworks)}
      {renderSkillsCategory("Developer Tools", tools)}
      {renderSkillsCategory("Databases", databases)}      
    </div>
  );
};

export default Skills;
