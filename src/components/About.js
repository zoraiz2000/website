import React from 'react'

const About = ({ref, className}) => {
  return (
    <div ref={ref} className={className}>
        <div className='font-poppins font-extrabold text-4xl md2:text-6xl'>
            <span className="block text-white">About</span>
            <span className="block text-blue-500">Me</span>
        </div>
        <hr className='my-3 border-stone-50/30 w-[100%]'></hr>
        <div className="text-white font-poppins text-sm md2:text-[1rem]">
          <p className="pb-4">
            I’m a Software Engineer and Computer Science graduate from the University of Calgary with a passion for building efficient, 
            scalable systems and solving complex problems. I’m driven by the challenge of turning ideas into real-world solutions.
            This website showcases my skills, experience, and the tangible value I’ve delivered, offering employers a clear perspective 
            on the expertise and dedication I bring to every project.
          </p>
          <p>
            Beyond the world of code, I’m a licensed pilot, an avid cricket enthusiast, and a relentless explorer, constantly seeking 
            to learn, grow, and push boundaries in all facets of life. This is more than a portfolio—it’s a window into my drive and 
            capabilities. I’m eager to contribute my technical prowess and unwavering commitment to your team, ready to make a lasting impact!
          </p>
        </div>
    </div>
  )
}

export default About