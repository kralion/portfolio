import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Button } from "@material-tailwind/react";
import RepoIcon from "../assets/icons/repo.png";
import ExayaRepoCover from "../assets/repo-covers/exaya.png";
import PowerhubRepoCover from "../assets/repo-covers/powerhub.png";
import SimplypayRepoCover from "../assets/repo-covers/simplypay.jpg";
import EventWiseRepoCover from "../assets/repo-covers/eventwise.png";
import LuminaryRepoCover from "../assets/repo-covers/luminary.png";
import MaburoRepoCover from "../assets/repo-covers/maburo.png";

function Experience() {
  return (
    <section
      data-aos="zoom-out"
      data-aos-delay="200"
      data-aos-duration="1000"
      id="experience"
      className=" lg:mx-24 my-12 text-center font-Source-Sans-Pro"
    >
      <header className="lg:p-20 px-5 py-10 flex flex-col gap-5">
        <span className="bg-[#eb5e28] w-[102px] text-center px-3 my-2 text-gray-100 font-semibold py-1 self-center pb-2 rounded-full">
          Experience
        </span>
        <h3 className="lg:text-4xl text-2xl font-bold">Side Projects</h3>
      </header>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <ProjectCard
          projectTitle="Exaya"
          description="Modern transportation management system with AI integrations"
          usedTechnologies={["react", "tailwindcss", "firebase", "graphql"]}
          demoLink="https://www.github.com"
          projectImage={ExayaRepoCover}
          projectLink="https://github.com/Dv-Joan/event-wise"
        />
        <ProjectCard
          projectTitle="Event Wise"
          description="Smart productivity app harnessing AI for efficient workflows."
          demoLink="https://www.github.com"
          usedTechnologies={["firebase", "tailwindcss", "react"]}
          projectImage={EventWiseRepoCover}
          projectLink="https://github.com/Dv-Joan/practicas-react"
        />
        <ProjectCard
          projectTitle="Powerhub"
          description="Essential EV companion for battery stats and nearby charging station tracking."
          demoLink="https://www.github.com"
          usedTechnologies={["react", "tailwindcss"]}
          projectImage={PowerhubRepoCover}
          projectLink="https://github.com/Dv-Joan/Ecologycall-SLP"
        />
        <ProjectCard
          projectTitle="Simplypay"
          description="A modern, intuitive payment app, city's top choice utilizing, w/ UX best practices."
          demoLink="https://www.github.com"
          usedTechnologies={["react", "tailwindcss", "firebase", "graphql"]}
          projectImage={SimplypayRepoCover}
          projectLink="https://github.com/Dv-Joan/uncp-apps-dev"
        />
        <ProjectCard
          projectTitle="Maburo"
          description="Innovative airline management platform harnessing cutting-edge technologies."
          usedTechnologies={["react", "js", "tailwindcss", "css"]}
          projectImage={MaburoRepoCover}
          demoLink="https://proyectos-semanales.netlify.app/"
          projectLink="https://github.com/Dv-Joan/uncp-apps-dev"
        />
        <ProjectCard
          projectTitle="Luminary"
          description="Modern immersive electronics shopping experience for cutting-edge retail tech."
          demoLink="https://www.github.com"
          usedTechnologies={["firebase", "tailwindcss", "react"]}
          projectImage={LuminaryRepoCover}
          projectLink="https://github.com/Dv-Joan/practicas-react"
        />

        <div className=" p-5 col-span-2 hover:shadow-2xl shadow-xl  rounded-2xl duration-200 bg-white ">
          More Projects
          <hr className="my-3 h-px " />
          <div className="p-6 ">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
              Want to explore ?
            </h5>
            <p className="mb-10 text-base text-neutral-600 font-Roboto">
              Click the button below to see more of my projects on Github.
            </p>

            <Button
              size="lg"
              fullWidth={true}
              className="flex justify-center py-3 normal-case bg-[#403d39] text-white hover:bg-black hover:text-white duration tracking-wider  rounded-xl"
            >
              <a
                href="https://github.com/Dv-Joan?tab=repositories"
                className=" items-center flex gap-3 "
                target="_blank"
                rel="noreferrer"
              >
                Go to Github
                <div>
                  <img width={15} height={15} src={RepoIcon} alt="demo" />
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
