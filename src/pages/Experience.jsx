import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Button } from "@material-tailwind/react";
import ExayaRepoCover from "../assets/repo-covers/exaya.png";
import PowerhubRepoCover from "../assets/repo-covers/powerhub.png";
import SimplypayRepoCover from "../assets/repo-covers/simplypay.jpg";
import EventWiseRepoCover from "../assets/repo-covers/eventwise.png";
import LuminaryRepoCover from "../assets/repo-covers/luminary.png";
import MaburoRepoCover from "../assets/repo-covers/maburo.png";
import { FolderInput } from "lucide-react";

export default function Experience() {
  return (
    <section
      data-aos="zoom-out"
      data-aos-delay="200"
      data-aos-duration="1000"
      id="experience"
      className=" lg:mx-24  my-24 space-y-10 font-Source-Sans-Pro"
    >
      <header className="space-y-3.5 text-center">
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
          demoLink="#"
          projectImage={ExayaRepoCover}
          projectLink="https://github.com/Dv-Joan/exaya"
        />
        <ProjectCard
          projectTitle="Event Wise"
          description="Smart productivity app harnessing AI for efficient workflows."
          demoLink="#"
          usedTechnologies={["tensorflow", "tailwindcss", "vite", "typescript"]}
          projectImage={EventWiseRepoCover}
          projectLink="https://github.com/Dv-Joan/event-wise"
        />
        <ProjectCard
          projectTitle="Powerhub"
          description="Essential EV companion for battery stats and nearby charging station tracking."
          demoLink="#"
          usedTechnologies={["tailwindcss", "nextjs", "redis", "typescript"]}
          projectImage={PowerhubRepoCover}
          projectLink="https://github.com/Dv-Joan/powerhub"
        />
        <ProjectCard
          projectTitle="Simplypay"
          description="A modern, intuitive payment app, city's top choice utilizing, w/ UX best practices."
          demoLink="#"
          usedTechnologies={[
            "aws",
            "nextjs",
            "tailwindcss",
            "redis",
            "typescript",
          ]}
          projectImage={SimplypayRepoCover}
          projectLink="https://github.com/Dv-Joan/simplypay"
        />
        <ProjectCard
          projectTitle="Maburo"
          description="Innovative airline management platform harnessing cutting-edge technologies."
          usedTechnologies={[
            "nextjs",
            "typescript",
            "tailwindcss",
            "github-actions",
          ]}
          projectImage={MaburoRepoCover}
          demoLink="#"
          projectLink="https://github.com/Dv-Joan/maburo"
        />
        <ProjectCard
          projectTitle="Luminary"
          description="Modern immersive electronics shopping experience for cutting-edge retail tech."
          demoLink="#"
          usedTechnologies={["gcp", "tailwindcss", "vite"]}
          projectImage={LuminaryRepoCover}
          projectLink="https://github.com/Dv-Joan/luminary"
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
