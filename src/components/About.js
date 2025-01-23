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
          I’m a recent Computer Science graduate from the University of Calgary who loves turning ideas into impactful software. 
          I’ve built scalable systems, optimized performance, and tackled real-world problems—like developing a volumetric live-streaming 
          system and creating apps with React, TypeScript, and .NET.
          </p>
          <p>
          Beyond code, I’m a pilot, music lover, and explorer always looking to learn, grow, and create. Let’s build something cool. 
          </p>
        </div>
    </div>
  )
}

export default About