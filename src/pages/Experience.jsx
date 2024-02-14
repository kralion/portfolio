import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Button } from "@material-tailwind/react";
import ExayaCover from "../assets/repo-covers/exaya.png";
import PowerHubCover from "../assets/repo-covers/powerhub.png";
import ExpenseTrackerCover from "../assets/repo-covers/expense-tracker.png";
import EventWiseCover from "../assets/repo-covers/eventwise.png";
import VidplusCover from "../assets/repo-covers/vidplus.png";
import { FolderInput } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className=" lg:mx-24  space-y-10 font-Source-Sans-Pro"
    >
      <header
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="space-y-3.5 text-center"
      >
        <span className="bg-[#eb5e28] px-3 my-2 text-gray-100 py-1 w-fit  rounded-full">
          Experience
        </span>
        <h3 className="lg:text-4xl text-2xl font-Inter font-bold">Projects</h3>
      </header>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 items-center">
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
          demoLink="https://superlative-biscotti-39a22f.netlify.app"
          projectImage={ExayaCover}
          projectLink="https://github.com/Dv-Joan/exaya"
        />
        <ProjectCard
          projectTitle="Event Wise"
          description="Smart productivity app harnessing AI for efficient workflows."
          demoLink="https://event-wise.vercel.app"
          usedTechnologies={["tensorflow", "tailwindcss", "vite", "typescript"]}
          projectImage={EventWiseCover}
          projectLink="https://github.com/Dv-Joan/event-wise"
        />
        <ProjectCard
          projectTitle="Powerhub"
          description="Essential EV companion for battery stats and nearby charging station tracking."
          demoLink="https://powerhub-k2lf8u56q-dv-joan.vercel.app"
          usedTechnologies={["tailwindcss", "nextjs", "redis", "typescript"]}
          projectImage={PowerHubCover}
          projectLink="https://github.com/Dv-Joan/powerhub"
        />
        <ProjectCard
          projectTitle="VidPlus"
          description="Vid plus SASS product backbone with modern tech stack, w/ UX best practices."
          //TODO Change the url, because nextjs has an issue with the url
          demoLink="https://vidplus-1758euuw7-dv-joan.vercel.app"
          usedTechnologies={[
            "aws",
            "nextjs",
            "tailwindcss",
            "redis",
            "typescript",
          ]}
          projectImage={VidplusCover}
          projectLink="https://github.com/Dv-Joan/vidplus"
        />
        <ProjectCard
          projectTitle="Expense Tracker"
          description="Innovative airline management platform harnessing cutting-edge technologies."
          usedTechnologies={[
            "nextjs",
            "typescript",
            "tailwindcss",
            "github-actions",
          ]}
          projectImage={ExpenseTrackerCover}
          demoLink="https://expense-tracker-eta-khaki.vercel.app"
          projectLink="https://github.com/Dv-Joan/maburo"
        />
        <ProjectCard
          projectTitle="Parify"
          description="This project serves as a platform for 3D printers, offering a diverse range of cutting-edge models."
          demoLink="https://luminary-alpha.vercel.app"
          usedTechnologies={["gcp", "tailwindcss", "vite"]}
          projectImage="https://cdn.dribbble.com/userupload/6319482/file/original-77e9d1c1bd2e944cc97be31180191bf3.png?resize=640x480&vertical=center"
          projectLink="https://github.com/Dv-Joan/parify"
        />
      </div>
      <div className="flex justify-center m-5  lg:my-10">
        <div className="w-[700px]  p-5 col-span-2 hover:shadow-2xl shadow-xl  rounded-2xl duration-200 bg-white ">
          More Projects
          <hr className="my-3" />
          <div className="p-6 text-center ">
            <Button
              size="lg"
              fullWidth={true}
              className="flex justify-center py-3 normal-case  text-white hover:bg-[#403d39] bg-black hover:text-white duration-200 tracking-wider  rounded-xl"
            >
              <a
                href="https://github.com/Dv-Joan?tab=repositories"
                className=" items-center flex gap-3 "
                target="_blank"
                rel="noreferrer"
              >
                Go to Github
                <FolderInput size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
