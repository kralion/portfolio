import React from "react";
import devBanner from "../assets/about-banner.gif";
import Resume from "../assets/Resume.pdf";
import DownloadIcon from "../assets/icons/download.svg";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row lg:justify-between lg:ml-36 ml-2 lg:gap-10 items-center font-Source-Sans-Pro"
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
        className=" flex flex-col text-center lg:text-left gap-5"
      >
        <span className="bg-[#eb5e28]  text-center px-3  lg:my-5 mt-10 text-gray-100 py-1  lg:self-left self-center pb-2 rounded-full">
          About Me
        </span>
        <h3 className="lg:text-4xl text-2xl font-semibold">
          Why Hiring Me For Your Next <br /> Project
        </h3>
        <p className="text-gray-500 lg:w-3/4 w-full ">
          The combination of AI and Frontend is one of the perfect combinations
          to achieve this, and I have experience in both areas. My focus on
          leveraging AI to drive Frontend development has allowed me to create
          efficient, user-centric solutions. <br />{" "}
          <span className="text-zinc-700 font-semibold">
            " I am excited to face new challenges and continue to grow as a
            professional "{" "}
          </span>{" "}
        </p>

        <a className="icon" href={Resume} download="Resume.pdf">
          <button class="button font-semibold uppercase">My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
