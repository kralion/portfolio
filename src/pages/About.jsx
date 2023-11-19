import React from "react";
import devBanner from "../assets/about-banner.gif";
import Resume from "../assets/Resume.pdf";
import { FileDown } from "lucide-react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function About() {
  return (
    <section
      id="about"
      className="flex h-screen flex-col lg:flex-row lg:justify-between lg:ml-36 mt-10 lg:mt-0 ml-2 lg:gap-10 items-center font-Source-Sans-Pro"
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
          I'm Brayan, a passionate
          <RoughNotation show={true} color="#F3CC4A" type="underline">
            <span className="text-black px-2 font-mono font-semibold ">
              Software
            </span>
          </RoughNotation>
          and
          <RoughNotation show={true} color="#F3CC4A" type="underline">
            <span className="text-black px-2 font-mono font-semibold">AI</span>
          </RoughNotation>
          engineer based in South America, dedicated to creating innovative
          solutions that make life easier. I thrive on challenges and am eager
          to take on exciting projects that push boundaries. With my experience
          developing robust applications, I craft
          <RoughNotation show={true} color="#F3CC4A" type="underline">
            <span className="text-black px-2 font-mono font-semibold ">
              elegant
            </span>
          </RoughNotation>
          solutions that solve
          <RoughNotation show={true} color="#F3CC4A" type="underline">
            <span className="text-black  px-2 font-mono font-semibold ">
              real world
            </span>
          </RoughNotation>
          problems. As a quick learner who adapts well to new stacks,lover of
          CI/CD to improve what I build over time, but also taking into account
          the big picture of each project, making sure it fits into the broader
          business goals and user needs. I am excited to embark on new software
          development journeys together.
          <br />
          <RoughNotation show={true} color="#F3CC4A" type="highlight">
            <span className="text-black  font-semibold">
              Through collaboration and innovation, we can transform complex
              challenges into meaningful solutions that drive progress.
            </span>
          </RoughNotation>
        </p>

        <a className="icon" href={Resume} download="Resume.pdf">
          <button className="button rounded flex gap-2 items-center text-sm lg:text-md font-semibold uppercase">
            My Resume <FileDown size={15} />
          </button>
        </a>
      </div>
    </section>
  );
}

export default About;
