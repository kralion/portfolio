import React from "react";
import AppleBrand from "../assets/apple-11.svg";
import profilePic from "../assets/profile-pic.png";
import '../styles/styles.css';
import uncpLogo from "../assets/logos/uncp-logo.png";

function Home() {
  return (
    <div className="font-Source-Sans-Pro ">
      <div className="flex justify-between mx-16 mb-24">
        <div className="">
          <div className="flex flex-col gap-2 mt-32">
            <span className="text-4xl font-semibold">FRONT-END DEVELOPER</span>
            <span className="text-5xl font-black">BRAYAN JOAN P.M</span>
          </div>
          <div className="my-14">
            <button className="bg-[#FDC738] hover:text-[#e4bc50] hover:bg-black  font-semibold px-5 py-2 ease-in-out duration-300 active:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(167,138,59,0.8)]  shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(15,15,15,15)] hover:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(253,199,56,0.8)]">
              Contact Me
            </button>
          </div></div>
        <div>
          <img src={profilePic} alt="profilePic" />
        </div></div>
      <hr />
      <section id="logos-section" className="flex justify-center space-x-24">
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={uncpLogo} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
        <img id="logo" src={AppleBrand} alt="apple" />
      </section>
      <hr />
    </div>
  );
}

export default Home;
