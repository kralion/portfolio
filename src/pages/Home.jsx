import React from "react";
import AppleBrand from "../assets/apple-11.svg";
import devBanner from "../assets/banner.png";

function Home() {
  return (
    <div className="font-Source-Sans-Pro ">
      <div className="flex justify-between mx-16">
<div className="">


      <div className="flex flex-col gap-2 mt-32">
        <span className="text-4xl font-semibold">FRONT-END DEVELOPER</span>
        <span className="text-5xl font-black">BRAYAN JOAN P.M</span>
      </div>

      <div className="my-14">
        <button className="bg-[#FDC738] drop-shadow-xl shadow-black  font-semibold px-5 py-2 hover:scale-110 ease-in-out duration-300 ">
          Contact Me
        </button>
        
      </div></div>
       
      <div className="">
          <img src={devBanner} alt="profilePic" />
      </div></div>
    <hr />
      <div className=" "> 
       
       <div className="flex items-center justify-center gap-48">
        <img src={AppleBrand} alt="apple" />
        <img src={AppleBrand} alt="apple" />
        <img src={AppleBrand} alt="apple" />
        <img src={AppleBrand} alt="apple" />
       </div>         
      </div><hr />
         </div>
  );
}

export default Home;
