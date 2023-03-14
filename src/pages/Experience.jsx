import React from 'react'
import ProjectCard from '../components/ProjectCard'
import uxuitodo from "../assets/project-bg/uxuitodo.png"
import todo from "../assets/project-bg/todo.png"


function Experience() {
    return (
        <div className=" mx-24 my-12 text-center font-Source-Sans-Pro">
            <div className="p-20 flex flex-col gap-5">
                <span className="bg-[#eb5e28] w-[102px] text-center px-3 my-2 text-gray-100 font-semibold py-1 self-center pb-2 rounded-full">Experience</span>
                <h3 className="text-4xl font-bold">My Latest Projects</h3>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <ProjectCard projectTitle="UX UI Todo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["react", "tailwindcss", "firebase", "graphql"]} projectImage={todo} />
                <ProjectCard projectTitle="Clans CRUD" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["firebase", "tailwindcss", "react"]} projectImage={todo} />
                <ProjectCard projectTitle="UNCP QA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." usedTechnologies={["react", "tailwindcss"]} projectImage={todo} />



            </div>
        </div>
    )
}

export default Experience