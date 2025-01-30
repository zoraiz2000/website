import React from 'react'

export const Resume = ({ref, className}) => {

  const handleDownload = () => {
    const fileUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={ref} className={`${className}`}>
        <div className='font-poppins font-extrabold text-4xl md2:text-6xl'>
        <span className="block text-white">My</span>
        <span className="block text-blue-500">Resume</span>
        </div>
        <hr className='my-3 border-stone-50/30 w-[73%] bg-white'></hr>
        <iframe  
            src="/resume.pdf" 
            className="w-full h-5/6 relative"
        />
        <div className='flex w-full mx-auto'>
          <button
            onClick={handleDownload}
            className="flex mx-auto mt-5 py-2 px-6 bg-[rgb(10,102,194)] border border-transparent hover:border-white text-sm text-white font-bold rounded-3xl cursor-pointer transition duration-200"
          >
            Download
          </button>
        </div>
    </div>
  )
}

export default Resume;