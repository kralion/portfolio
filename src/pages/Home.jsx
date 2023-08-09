import React from "react";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import uncpLogo from "../assets/images/uncp.png";
import fisLogo from "../assets/images/fis.png";
import microsfotLogo from "../assets/images/microsoft.png";
import AOSWrapper from "../utils/AOS";

function Home() {
  return (
    <AOSWrapper>
      <div className="font-Inter ">
        <div className="flex justify-between gap-7  lg:mx-16 mx-5 items-center mb-24">
          <div
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-2 lg:mt-10">
              <span className="text-2xl lg:text-6xl font-bold">FRONTEND</span>
              <span className="text-2xl lg:text-6xl font-bold">
                <span className="text-[#ecbb32] text-2xl lg:text-6xl">& </span>
                AI DEVELOPER
              </span>
              <span className="text-3xl lg:text-5xl  font-Borel lg:mt-16 ">
                Brayan J. Paucar Marca
              </span>
            </div>
            <div className="mt-16 mb-7 group ">
              <div className="bg-[#FDC738] group-hover:translate-x-[2px] bottom-[22px] left-[10px] group-hover:translate-y-[2px] duration-300 absolute w-40 h-10"></div>
              <button className="group-hover:-translate-x-[2px] active:focus:ring-4 active:bg-slate-600 active:focus:ring-[#FDC738] group-hover:-translate-y-[3px] relative bg-black text-gray-100 font-semibold px-7 py-2 ease-in-out duration-300 uppercase   ">
                Contact Me
              </button>
            </div>
          </div>
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="flex items-center justify-center">
              <div class="rounded-full w-full  bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 p-2">
                <div class="flex  rounded-full h-full w-full items-center justify-center  back">
                  <img
                    src={profilePic}
                    alt="profilePic"
                    className="rounded-full drop-shadow-2xl p-1  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <section id="logos-section" className="flex justify-center space-x-24">
          <img id="logo" src={uncpLogo} alt="apple" />
          <img id="logo" src={fisLogo} alt="apple" />
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Microsoft_Edge_Dev_Logo_%282018%29.svg"
            alt="microsoft"
          />
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Bing_Logo.svg"
            alt="microsoft"
          />
          <img id="logo" src={uncpLogo} alt="apple" />
          <img id="logo" src={fisLogo} alt="apple" />
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Microsoft_Edge_Dev_Logo_%282018%29.svg"
            alt="microsoft"
          />
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Bing_Logo.svg"
            alt="microsoft"
          />
          <img id="logo" src={uncpLogo} alt="apple" />
          <img id="logo" src={fisLogo} alt="apple" />
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Microsoft_Edge_Dev_Logo_%282018%29.svg"
            alt="microsoft"
          />
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Bing_Logo.svg"
            alt="microsoft"
          />
        </section>
        <hr />
      </div>
    </AOSWrapper>
  );
}

export default Home;
