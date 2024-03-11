import { Button, Chip } from "@material-tailwind/react";
import React from "react";
import EventWiseCover from "../assets/repo-covers/eventwise.jpg";
import ExayaCover from "../assets/repo-covers/exaya.jpg";
import ExpenseTrackerCover from "../assets/repo-covers/expense-tracker.jpg";
import PowerHubCover from "../assets/repo-covers/powerhub.jpg";
import VidplusCover from "../assets/repo-covers/vidplus.jpg";
import GithubIcon from "../assets/svg/github.svg";
import ProjectCard from "../components/ProjectCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className=" lg:mx-24 pt-24 lg:pt-16 space-y-10 font-Source-Sans-Pro"
    >
      <header
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="space-y-3.5 text-center"
      >
        <Chip
          color="orange"
          className="w-fit rounded-full mx-auto  "
          variant="gradient"
          value="Experience"
        />
        <h3 className="lg:text-4xl text-2xl font-Inter font-bold">Projects</h3>
      </header>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 ">
        <ProjectCard
          projectTitle="Exaya"
          description="Modern transportation management system with AI integrations"
          usedTechnologies={[
            "nextjs",
            "tensorflow",
            "tailwindcss",
            "supabase",
            "prisma",
          ]}
          demoLink="https://exaya.netlify.app"
          projectImage={ExayaCover}
          projectLink="https://github.com/kralion/exaya"
        />
        <ProjectCard
          projectTitle="Event Wise"
          description="Smart productivity app harnessing AI for efficient workflows."
          demoLink="https://event-wise.vercel.app"
          usedTechnologies={["tensorflow", "tailwindcss", "vite", "typescript"]}
          projectImage={EventWiseCover}
          projectLink="https://github.com/kralion/event-wise"
        />
        <ProjectCard
          projectTitle="Powerhub"
          description="Essential EV companion for battery stats and nearby charging station tracking."
          demoLink="https://powerhub-doeh5taog-brayanpaucar.vercel.app"
          usedTechnologies={["tailwindcss", "nextjs", "redis", "typescript"]}
          projectImage={PowerHubCover}
          projectLink="https://github.com/kralion/powerhub"
        />
        <ProjectCard
          projectTitle="VidPlus"
          description="Vid plus SASS product backbone with modern tech stack, w/ UX best practices."
          demoLink="https://vidplus-e8edr3vpr-brayanpaucar.vercel.app"
          usedTechnologies={[
            "aws",
            "nextjs",
            "tailwindcss",
            "redis",
            "typescript",
          ]}
          projectImage={VidplusCover}
          projectLink="https://github.com/kralion/vidplus"
        />
        <ProjectCard
          projectTitle="Expense Tracker"
          description="Expense tracking app with cool features for easy expense tracking and seamless user experience."
          usedTechnologies={[
            "nextjs",
            "typescript",
            "tailwindcss",
            "github-actions",
          ]}
          projectImage={ExpenseTrackerCover}
          demoLink="https://expensetrackerweb.vercel.app"
          projectLink="https://github.com/kralion/expense-tracker"
        />
        <ProjectCard
          projectTitle="Parify"
          description="This project serves as a platform for 3D printers, offering a diverse range of cutting-edge models."
          demoLink="https://parify.vercel.app"
          usedTechnologies={["gcp", "tailwindcss", "vite"]}
          projectImage="https://cdn.dribbble.com/userupload/6319482/file/original-77e9d1c1bd2e944cc97be31180191bf3.png?resize=640x480&vertical=center"
          projectLink="https://github.com/kralion/parify"
        />
      </div>
      <div className="flex justify-center m-5  lg:my-10">
        <div className="w-[700px]  p-5 col-span-2 hover:shadow-2xl shadow-xl  rounded-2xl duration-200 bg-white ">
          More Projects on my Profile
          <hr className="my-3" />
          <div className="p-6 text-center ">
            <a
              href="https://github.com/kralion"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <Button
                variant="gradient"
                fullWidth
                className="flex rounded-lg gap-3 justify-center font-semibold items-center"
              >
                Go to Github
                <img
                  src={GithubIcon}
                  className="group-active:scale-105 duration-150 ease-out"
                  alt="github"
                  width={18}
                  height={18}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
