import React from "react";
import profilePic from "../assets/images/profile-pic.png";
import '../styles/styles.css';
import uncpLogo from "../assets/images/uncp.png";
import fisLogo from "../assets/images/fis.png";
import microsfotLogo from "../assets/images/microsoft.png";
import AOSWrapper from '../utils/AOS';

function Home() {
  return (
    <AOSWrapper>
      <div className="font-Source-Sans-Pro ">
        <div className="flex justify-between gap-7  lg:mx-16 mx-5 items-center mb-24">
          <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200"  >
            <div className="flex flex-col gap-2 lg:mt-10">
              <span className="text-2xl lg:text-4xl font-semibold">FRONT-END DEVELOPER </span>
              <span className="text-2xl lg:text-4xl font-semibold"><span className="text-[#ecbb32] text-2xl  lg:text-4xl"> & </span>PROMPT ENGINEER</span>
              <span className="text-3xl lg:text-5xl lg:mt-16 mt-5 font-black">BRAYAN JOAN P.M</span>
            </div>
            <div className="mt-14 mb-7">
              <button className="bg-[#FDC738] hover:text-[#e4bc50] hover:bg-black  font-semibold px-5 py-2 ease-in-out duration-300 active:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(167,138,59,0.8)]  shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(15,15,15,15)] hover:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(253,199,56,0.8)]">
                Contact Me
              </button>
            </div></div>
          <div data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
            <img src={profilePic} alt="profilePic" className="pb-20" />
          </div></div>
        <hr />
        <section id="logos-section" className="flex justify-center space-x-24">
      
          <img id="logo"  src={uncpLogo} alt="apple" />
          <img id="logo" src={fisLogo} alt="apple" />
          <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Microsoft_Edge_Dev_Logo_%282018%29.svg" alt="microsoft" />
          <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Bing_Logo.svg" alt="microsoft" />
          <img id="logo"  src={uncpLogo} alt="apple" />
          <img id="logo" src={fisLogo} alt="apple" />
          <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Microsoft_Edge_Dev_Logo_%282018%29.svg" alt="microsoft" />
<img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Bing_Logo.svg" alt="microsoft" />
          <img id="logo"  src={uncpLogo} alt="apple" />
          <img id="logo" src={fisLogo} alt="apple" />
          <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Microsoft_Edge_Dev_Logo_%282018%29.svg" alt="microsoft" />
<img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Bing_Logo.svg" alt="microsoft" />
          
        </section>
        <hr />
      </div>
    </AOSWrapper>
  );
}

export default Home;
