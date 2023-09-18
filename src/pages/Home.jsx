import React from "react";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import uncpLogo from "../assets/images/uncp.png";
import fisLogo from "../assets/images/fis.png";
import AOSWrapper from "../utils/AOS";

function Home() {
  return (
    <AOSWrapper>
      <div className="font-Inter ">
        <div className="flex lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between justify-center h-screen lg:mx-10 mx-5 items-center ">
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-2 font-bold text-xl lg:text-6xl lg:mt-10">
              <span>
                {" "}
                SOFTWARE <span className="text-[#ffc40c] ">/</span>
              </span>{" "}
              AI NATIVE DEVELOPER
              <span className="text-xl lg:text-5xl  font-Borel lg:mt-16 ">
                Brayan J. Paucar Marca
              </span>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/joan-paucar/"
            >
              <button class="button lg:text-md text-sm mt-16 rounded group font-Source-Sans-Pro font-bold uppercase ">
                Contact Me
              </button>
            </a>
          </div>
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="rounded-full w-full lg:m-0 mx-10  bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400  p-10">
              <div className="flex  rounded-full h-full w-full items-center justify-center">
                <img
                  src={profilePic}
                  alt="profilePic"
                  className="rounded-full drop-shadow-2xl p-1 bg-[#FDFFF6]"
                />
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
