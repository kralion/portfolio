import React from 'react'
import devBanner from "../assets/banner.png";


function About() {
  return (
    
    <div className="flex justify-between mx-24 font-Source-Sans-Pro">
    <div className="">

    <img src={devBanner} className="mt-7" width={1200} alt="devbanner" />
    </div>
    <div className=" p-24 flex flex-col gap-5">
      <span className="bg-green-500 w-[102px] text-center px-3 my-5 text-gray-100 font-semibold py-1 self-left pb-2 rounded-full">About Me</span>
      <h3 className="text-4xl font-semibold">Why Hiring Me For Your Next Project</h3>
      <p className="text-gray-500 w-6/7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, quod, quia, voluptates quae voluptatibus quibusdam
        voluptatum quos quidem nemo quas. Quisquam, quae. Quisquam, quae.
        </p>
       
        <div className="my-5">
    <button className="bg-[#FDC738] drop-shadow-xl shadow-black  font-semibold px-5 py-2 hover:scale-110 ease-in-out duration-300 ">
      Download CV
    </button>
    
  </div>
    
  
    </div>
  </div>
  )
}

export default About