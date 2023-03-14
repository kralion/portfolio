import React from 'react'
import ProjectCard from '../components/ProjectCard'


function Experience() {
    return (
        <div className=" mx-24 my-12 text-center font-Source-Sans-Pro">
            <div className="p-20 flex flex-col gap-5">
                <span className="bg-green-500 w-[102px] text-center px-3 my-2 text-gray-100 font-semibold py-1 self-center pb-2 rounded-full">Experience</span>
                <h3 className="text-4xl font-bold">My Latest Projects</h3>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <ProjectCard projectTitle="UX UI Todo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." tags="easy" technologies="react" />
                <ProjectCard projectTitle="Clans CRUD" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." tags="medium" technologies="react" />
                <ProjectCard projectTitle="UNCP Quality Management" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." tags="advanced" technologies="react" />



            </div>
        </div>
    )
}

export default Experience