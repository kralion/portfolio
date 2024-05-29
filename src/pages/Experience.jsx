import { Button, Chip } from "@material-tailwind/react";
import React from "react";
import ExayaCover from "../assets/repo-covers/exaya.jpg";
import MonedoCover from "../assets/repo-covers/monedo.jpg";
import PowerHubCover from "../assets/repo-covers/powerhub.jpg";
import GithubIcon from "../assets/svg/github.svg";
import ProjectCard from "../components/ProjectCard";
import KindranetCover from "../assets/repo-covers/kindranet.jpg";
import GrubloCover from "../assets/repo-covers/grublo.jpg";

export default function Experience() {
  return (
    <section
      id="experience"
      className=" lg:mx-24 pt-24 lg:pt-16 lg:space-y-20 space-y-10 font-Obviously"
    >
      <header
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="space-y-2 text-center"
      >
        <Chip
          color="orange"
          className="w-fit rounded-full mx-auto  "
          variant="gradient"
          value="Experience"
        />
        <h3 className="lg:text-4xl text-2xl  font-Obviously font-black">
          Projects
        </h3>
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
          demoLink="https://exaya.vercel.app"
          projectImage={ExayaCover}
        />
        <ProjectCard
          projectTitle="Kindranet"
          description="Modern intranet solution for educational institutions with Edge technology integrations"
          demoLink="https://kindranet.vercel.app"
          usedTechnologies={[
            "prisma",
            "nextjs",
            "tailwindcss",
            "nodejs",
            "jest",
            "cypress",
          ]}
          projectImage={KindranetCover}
        />
        <ProjectCard
          projectTitle="Powerhub"
          description="Essential EV companion for battery stats and nearby charging station tracking."
          demoLink="https://powerhub-doeh5taog-brayanpaucar.vercel.app"
          usedTechnologies={["tailwindcss", "nextjs", "mongodb", "typescript"]}
          projectImage={PowerHubCover}
        />
        <ProjectCard
          projectTitle="Grublo"
          description="Software development company with a focus on web development and design."
          demoLink="https://grublo.netlify.app"
          usedTechnologies={[
            "figma",
            "astro-dark",
            "typescript",
            "tailwindcss",
          ]}
          projectImage={GrubloCover}
        />
        <ProjectCard
          projectTitle="Monedo"
          description="Expense tracking app with cool features for easy expense tracking and seamless user experience."
          usedTechnologies={[
            "expo",
            "typescript",
            "tailwindcss",
            "github-actions",
          ]}
          projectImage={MonedoCover}
          demoLink="https://monedo.vercel.app"
        />

        <ProjectCard
          projectTitle="Parify"
          description="This project serves as a platform for 3D printers, offering a diverse range of cutting-edge models."
          demoLink="https://parify.vercel.app"
          usedTechnologies={["docker", "tailwindcss", "nextjs", "typescript"]}
          projectImage="https://cdn.dribbble.com/userupload/6319482/file/original-77e9d1c1bd2e944cc97be31180191bf3.png?resize=640x480&vertical=center"
        />
      </div>
      <div className="flex justify-center m-5  lg:my-10">
        <div className="w-[700px]  p-5 col-span-2 hover:shadow-2xl shadow-xl  rounded-2xl duration-200 bg-white dark:bg-gray-900 border-2 dark:border-gray-800/30 ">
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
