import React from "react";
import devBanner from "../assets/about-banner.gif";
import Resume from "../assets/Resume.pdf";
import { FileDown } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row lg:justify-between lg:ml-36 mt-10 lg:mt-0 ml-2 lg:gap-10 items-center font-Source-Sans-Pro"
    >
      <img
        data-aos="slide-right"
        data-aos-duration="1000"
        src={devBanner}
        className="hidden lg:inline"
        width={500}
        alt="devbanner"
      />
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className=" flex flex-col  gap-5"
      >
        <span className="bg-[#eb5e28] w-fit  px-3  lg:my-5  text-gray-100 py-1  rounded-full">
          About Me
        </span>
        <h3 className="lg:text-3xl text-2xl font-Inter">
          Who I am & What I do <span className="text-[#eb5e28]">?</span>
        </h3>
        <p className="text-gray-500 px-4  lg:px-0 lg:w-3/4 w-full ">
          I'm Brayan, a passionate Software and AI Native Developer based in
          Peru, South America. I thrive on challenges and am dedicated to
          creating innovative solutions that make life easier for people. My
          expertise lies in software development and AI, and I'm always eager to
          take on new and exciting projects that push the boundaries of what's
          possible and I'm excited to apply my skills to tackle the most
          challenging tasks.
          <br />
          <span className="text-black bg-yellow-400 font-semibold">
            Let's embark on this journey together, and together, we can turn
            complex challenges into opportunities for growth and innovation.
          </span>
        </p>

        <a className="icon" href={Resume} download="Resume.pdf">
          <button class="button rounded flex gap-2 items-center text-sm lg:text-md font-semibold uppercase">
            My Resume <FileDown size={15} />
          </button>
        </a>
      </div>
    </section>
  );
}

export default About;
