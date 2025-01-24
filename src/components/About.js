import React from 'react'

const About = ({ref, className}) => {
  return (
    <div ref={ref} className={className}>
        <div className='font-poppins font-extrabold text-4xl md2:text-6xl'>
            <span className="block text-white">About</span>
            <span className="block text-blue-500">Me</span>
        </div>
        <hr className='my-3 border-stone-50/30 w-[80%]'></hr>
        <div className="text-white font-poppins text-sm md2:text-[1rem]">
          <p className="pb-4">
            I’m a Software Engineer and Computer Science graduate from the University of Calgary with a passion for building efficient, 
            scalable systems and solving complex problems. I’m driven by the challenge of turning ideas into real-world solutions.
            This website highlights my skills, experience, and the impact of my work, giving employers a clear view of what I bring to the table.
          </p>
          <p>
            Outside of coding, I’m a pilot, cricket enthusiast, and an explorer who thrives on learning and pushing boundaries in 
            everything I do. This is a glimpse into my expertise—I’m ready to bring my skills and drive to your team to make a meaningful impact!
          </p>
        </div>
    </div>
  )
}

export default About