import React from "react";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import uncpLogo from "../assets/images/uncp.png";
import fisLogo from "../assets/images/fis.png";
import microsfotLogo from "../assets/images/microsoft.png";
import AOSWrapper from "../utils/AOS";
import style from "../styles/styles.css";

function Home() {
  return (
    <AOSWrapper>
      <div className="font-Inter ">
        <div className="flex justify-between gap-7  lg:mx-16 mx-5 items-center mb-24">
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-2 lg:mt-10">
              <span className="text-2xl lg:text-6xl font-bold">
                SOFTWARE{" "}
                <span className="text-[#ffc40c] text-2xl lg:text-6xl"> / </span>{" "}
                AI
              </span>
              <span className="text-2xl lg:text-6xl font-bold">DEVELOPER</span>
              <span className="text-3xl lg:text-5xl  font-Borel lg:mt-16 ">
                Brayan J. Paucar Marca
              </span>
            </div>

            <a href="">
              <button class="button mt-16 mb-7 group font-Source-Sans-Pro font-bold uppercase ">
                Contact Me
              </button>
            </a>
          </div>
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-center">
              <div className="rounded-full w-full  bg-gradient-to-r from-[#ffc40c] via-red-500 to-[#ffc40c] p-2">
                <div className="flex  rounded-full h-full w-full items-center justify-center  back">
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
        <section
          id="logos-section"
          className="flex justify-center space-x-24 h-10"
        >
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
