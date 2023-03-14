import React from 'react'
import reactJS from "../assets/reactjs2.png";
import restAPI from "../assets/restapi.png";
import figma from "../assets/figma.png";
import mongoDB from "../assets/mongodb.png";

function Services() {
     return (
          <div className=" mx-24 my-12 text-center font-Source-Sans-Pro">
               <div className="p-20 flex flex-col gap-5">
                    <span className="bg-green-500 w-[102px] text-center px-3 my-2 text-gray-100 font-semibold py-1 self-center pb-2 rounded-full">Services</span>
                    <h3 className="text-4xl font-bold">Tech Stack</h3>
               </div>
               <div className="flex gap-5 py-5 px-3">
                    <div className="flex flex-col gap-5 border boder-slate-300 hover:shadow-[0.01rem_0.001rem_0.2rem_0.2rem_rgba(0,255,214,0.8)] rounded-lg py-10 px-16 duration-200 ">
                         <h4 className='text-xl font-bold'>React JS</h4>
                         <img src={reactJS} width={150} alt="reactjs" />

                    </div>
                    <div className="flex flex-col gap-5 border boder-slate-300 rounded-lg py-10 px-16 hover:shadow-[0.01rem_0.001rem_0.2rem_0.2rem_rgba(113,55,189,0.8)] duration-200">
                         <h4 className='text-xl font-bold'>Figma</h4>
                         <img src={figma} width={150} alt="figma" />

                    </div>
                    <div className="flex flex-col gap-5 border boder-slate-300 hover:shadow-[0.01rem_0.01rem_0.2rem_0.2rem_rgba(25,62,128,0.8)] rounded-lg py-10 px-16 duration-200 ">
                         <h4 className='text-xl font-bold'>Rest API</h4>
                         <img src={restAPI} width={150} alt="restapi" />

                    </div>
                    <div className="flex flex-col gap-5 border boder-slate-300 hover:shadow-[0.01rem_0.001rem_0.2rem_0.2rem_rgba(35,189,242,0.8)] rounded-lg py-10 px-16 duration-200 ">
                         <h4 className='text-xl font-semibold'>SQL Data</h4>
                         <img src={mongoDB} width={150} alt="mongodb" />

                    </div>
               </div>


          </div>
     )
}

export default Services