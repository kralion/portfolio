import React from "react";
import devBanner from "../assets/images/banner.png";
import cv from "../assets/CV.pdf";
import DownloadIcon from "../assets/icons/download.png";

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
        className="mt-7 hidden lg:inline"
        width={800}
        alt="devbanner"
      />
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className=" flex flex-col text-center lg:text-left gap-5"
      >
        <span className="bg-[#eb5e28] w-[102px] text-center px-3 mb-5 lg:my-5 mt-10 text-gray-100 py-1  lg:self-left self-center pb-2 rounded-full">
          About Me
        </span>
        <h3 className="text-4xl font-semibold">
          Why Hiring Me For Your Next <br /> Project
        </h3>
        <p className="text-gray-500 lg:w-3/4 w-full ">
          The combination of AI and Frontend is one of the perfect combinations
          to achieve this, and I have experience in both areas. My focus on
          leveraging AI to drive Frontend development has allowed me to create
          efficient, user-centric solutions. As a prompt engineer, I can
          streamline the process of developing technology solutions to take full
          advantage of AI and Frontend, and take the company's core business to
          the next level. <br />{" "}
          <span className="text-zinc-700 font-semibold">
            " I am excited to face new challenges and continue to grow as a
            professional "{" "}
          </span>{" "}
        </p>

        <div className="mt-7 mb-7 group ">
          <div className="bg-[#FDC738] group-hover:translate-x-[2px] bottom-[22px] left-[7px] group-hover:translate-y-[2px] duration-300 absolute w-48 h-10" />
          <a
            href={cv}
            download="CV.pdf"
            className="group-hover:-translate-x-[2px] active:focus:ring-4 active:bg-slate-600 w-48 flex active:focus:ring-[#FDC738] group-hover:-translate-y-[3px] relative bg-black text-gray-100 font-semibold px-7 items-center gap-3 py-2 ease-in-out duration-300 uppercase   "
          >
            <div>
              <img src={DownloadIcon} width={15} height={15} alt="download" />
            </div>
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
