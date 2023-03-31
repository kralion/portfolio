import React from 'react'
import devBanner from "../assets/banner.png";
import cv from "../assets/CV.pdf";


function About() {
  return (

    <section id='about' className="flex justify-between ml-36 gap-10 items-center font-Source-Sans-Pro">
      <img src={devBanner} className="mt-7" width={800} alt="devbanner" />
      <div className=" flex flex-col gap-5">
        <span className="bg-[#eb5e28] w-[102px] text-center px-3 my-5 text-gray-100 font-semibold py-1 self-left pb-2 rounded-full">About Me</span>
        <h3 className="text-4xl font-semibold">Why Hiring Me For Your Next <br /> Project</h3>
        <p className="text-gray-500 w-3/4">
          My passion is transforming ideas into captivating digital experiences. With over a year of experience in large-scale projects, I am passionate about pushing my creativity to the limit and using the latest technologies to create solutions that impact users. I'm about to graduate and I'm eager to put into practice everything I've learned and face new challenges that will allow me to continue growing as a professional.        </p>

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