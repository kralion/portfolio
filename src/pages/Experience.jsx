import React from 'react'
import ProjectCard from '../components/ProjectCard'
import uxuitodo from "../assets/project-bg/uxuitodo.png"
import todo from "../assets/project-bg/todo.png"
import { Button } from "@material-tailwind/react";
import githubWhite from "../assets/github-white.png"

function Experience() {
    return (
        <div className=" mx-24 my-12 text-center font-Source-Sans-Pro">
            <div className="p-20 flex flex-col gap-5">
                <span className="bg-[#eb5e28] w-[102px] text-center px-3 my-2 text-gray-100 font-semibold py-1 self-center pb-2 rounded-full">Experience</span>
                <h3 className="text-4xl font-bold">My Latest Projects</h3>
            </div>



            <div className="grid grid-cols-3 gap-12 items-center">
                <ProjectCard projectTitle="UX UI Todo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["react", "tailwindcss", "firebase", "graphql"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/ux-ui-todo.app" />
                <ProjectCard projectTitle="Clans CRUD" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["firebase", "tailwindcss", "react"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/practicas-react" />
                <ProjectCard projectTitle="ECO Inc LP" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["react", "tailwindcss"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/Ecologycall-SLP" />
                <ProjectCard projectTitle="UX UI Todo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["react", "tailwindcss", "firebase", "graphql"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/ux-ui-todo.app" />
                <ProjectCard projectTitle="Clans CRUD" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["firebase", "tailwindcss", "react"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/practicas-react" />
                <ProjectCard projectTitle="Clans CRUD" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["firebase", "tailwindcss", "react"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/practicas-react" />
                <div className="">

                </div>

                <div
                    className=" w-full max-w-[26rem] relative p-5 mx-5 hover:shadow-xl hover:border-[1px] hover:border-slate-400 rounded-xl duration-200 bg-white ">

                    More Projects

                    <hr
                        class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50" />
                    <div className="p-6 ">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                            Want to explore ?
                        </h5>
                        <p className="mb-10 text-base text-neutral-600 font-Roboto">
                            Click the button below to see more of my projects on Github.
                        </p>

                        <Button size="lg" fullWidth={true} className="px-12 py-2 flex gap-3  justify-center items-center normal-case bg-[#403d39] text-white tracking-wider  rounded-xl" >
                            <a href="https://github.com/Dv-Joan?tab=repositories" target="_blank" rel="noreferrer" >View More </a>
                            <img className='pt-1' src={githubWhite} alt="github" />
                        </Button>

                    </div>

                </div>
            </div>




        </div>

    )
}

export default Experience