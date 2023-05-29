import React from 'react'
import ProjectCard from '../components/ProjectCard'
import uxuitodo from "../assets/images/uxuitodo.png"
import todo from "../assets/images/todo.png"
import { Button } from "@material-tailwind/react";
import githubWhite from "../assets/images/github-white.png"
import uncpLogo from "../assets/images/uncp.png"

function Experience() {
    return (
        <section data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000" id='experience' className=" lg:mx-24 my-12 text-center font-Source-Sans-Pro">
            <header className="lg:p-20 px-5 py-10 flex flex-col gap-5">
                <span className="bg-[#eb5e28] w-[102px] text-center px-3 my-2 text-gray-100 font-semibold py-1 self-center pb-2 rounded-full">Experience</span>
                <h3 className="lg:text-4xl text-2xl font-bold">My Latest Projects</h3>
            </header>
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <ProjectCard projectTitle="Event Wise" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["react", "tailwindcss", "firebase", "graphql"]} demoLink="https://www.github.com" projectImage={todo} projectLink="https://github.com/Dv-Joan/event-wise" />
                <ProjectCard projectTitle="Clans CRUD" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." demoLink="https://www.github.com" usedTechnologies={["firebase", "tailwindcss", "react"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/practicas-react" />
                <ProjectCard projectTitle="ECO Inc LP" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." demoLink="https://www.github.com" usedTechnologies={["react", "tailwindcss"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/Ecologycall-SLP" />
                <ProjectCard projectTitle="UX UI Todo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." demoLink="https://www.github.com" usedTechnologies={["react", "tailwindcss", "firebase", "graphql"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/uncp-apps-dev" />
                <ProjectCard projectTitle="WebApp Course" description="University course about web applications development with JavaScript & it's libraries" usedTechnologies={["react", "js","tailwindcss", "css"]} projectImage={uncpLogo} demoLink="https://6474ba21cc503510286b207e--thunderous-snickerdoodle-14be3c.netlify.app/" projectLink="https://github.com/Dv-Joan/uncp-apps-dev" />
                <ProjectCard projectTitle="Clans CRUD" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." demoLink="https://www.github.com"usedTechnologies={["firebase", "tailwindcss", "react"]} projectImage={todo} projectLink="https://github.com/Dv-Joan/practicas-react" />
                
            

                <div
                    className=" w-full max-w-[26rem] hover:scale-105 relative p-5 mx-5 hover:shadow-xl  rounded-xl duration-200 bg-white ">

                    More Projects

                    <hr
                        className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50" />
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




        </section >

    )
}

export default Experience