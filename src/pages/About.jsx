import React from 'react'
import devBanner from "../assets/banner.png";
import cv from "../assets/CV.pdf";



function About() {

  return (

    <section id='about' className="flex flex-col lg:flex-row lg:justify-between lg:ml-36 ml-2 lg:gap-10 items-center font-Source-Sans-Pro">
      <img data-aos="slide-right" data-aos-duration="1000" src={devBanner} className="mt-7 hidden lg:inline" width={800} alt="devbanner" />
      <div data-aos="fade-in" data-aos-delay="200" data-aos-duration="500" className=" flex flex-col text-center lg:text-left gap-5">
        <span className="bg-[#eb5e28] w-[102px] text-center px-3 mb-5 lg:my-5 mt-10 text-gray-100 font-semibold py-1  self-center lg:self-left pb-2 rounded-full">About Me</span>
        <h3 className="text-4xl font-semibold">Why Hiring Me For Your Next <br /> Project</h3>
        <p className="text-gray-500 lg:w-3/4 w-full ">
          The combination of AI and Frontend is one of the perfect combinations to achieve this, and I have experience in both areas. My focus on leveraging AI to drive Frontend development has allowed me to create efficient, user-centric solutions. As a prompt engineer, I can streamline the process of developing technology solutions to take full advantage of AI and Frontend, and take the company's core business to the next level.  <br /> <span className='text-zinc-700 font-semibold'>
            " I am excited to face new challenges and continue to grow as a professional "   </span>   </p>


        <div className="my-5">
          <a href={cv} download="CV.pdf">
            <button className="bg-[#FDC738] hover:text-[#e4bc50] hover:bg-black  font-semibold px-5 py-2 ease-in-out duration-300 active:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(167,138,59,0.8)]  shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(15,15,15,15)] hover:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(253,199,56,0.8)]">
              <a href={cv} download="CV.pdf"> Download CV</a>
            </button>
          </a>
        </div>
      </div>
    </section>

  )
}

export default About