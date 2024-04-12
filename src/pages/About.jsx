import { Chip } from "@material-tailwind/react";
import { ExternalLink } from "lucide-react";
import React from "react";
import profilePic from "../assets/images/profile-pic.png";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row lg:justify-center gap-20 pt-24 lg:pt-16  px-4  items-center font-Source-Sans-Pro"
    >
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className=" flex flex-col px-5 lg:px-0 lg:w-1/2 gap-5"
      >
        <Chip
          color="orange"
          className="w-fit rounded-full  "
          variant="gradient"
          value="About Me"
        />
        <h3 className="lg:text-3xl text-2xl font-Inter flex items-center gap-1">
          Who I am & What I do <span className="text-orange-600">?</span>
        </h3>
        <div className="text-gray-600 dark:text-gray-300    ">
          I'm Brayan, a dynamic <strong> Software </strong>and
          <strong> AI </strong>Engineer from South America, committed to forging
          innovative solutions for real-world challenges. My drive for tackling
          complex projects is matched by a keen ability to adapt to new
          technologies and a passion for continuous improvement through CI/CD
          practices. I focus on crafting
          <strong> elegant</strong> & <strong>robust</strong> applications that
          align with overarching
          <strong> business objectives </strong>
          and user demands.
          <br />
          <p className="my-5 dark:text-white">
            — Let's innovate and turn real world problems into impactful,
            progressive, and driving solutions together.
          </p>
        </div>
        <a
          className="icon w-fit group"
          href="https://drive.google.com/file/d/1uWEIOPXvljmVd2ppGNZ5q4QldBlBUuGC/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button rounded flex gap-2 items-center text-sm lg:text-md font-semibold uppercase">
            My Resume{" "}
            <ExternalLink
              className="group-hover:translate-x-0.5 duration-100 group-hover:-translate-y-0.5 ease-in"
              size={15}
            />
          </button>
        </a>
      </div>
      <img
        data-aos="slide-left"
        data-aos-duration="1000"
        className="hidden lg:inline drop-shadow-xl rounded-full"
        src={profilePic}
        width={400}
        alt="profilePic"
      />
    </section>
  );
}
