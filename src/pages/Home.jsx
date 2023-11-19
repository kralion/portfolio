import React from "react";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import uncpLogo from "../assets/images/uncp.png";
import AOSWrapper from "../utils/AOS";
import { TypeAnimation } from "react-type-animation";
import { Mouse } from "lucide-react";

function Home() {
  return (
    <AOSWrapper>
      <div className="font-Inter ">
        <div className="flex relative lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between justify-center h-screen lg:mx-10 mx-5 items-center ">
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-2 font-bold text-xl lg:text-6xl lg:mt-10">
              <span>
                {" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "SOFTWARE", // Types 'One'
                    1000,
                  ]}
                  cursor={false}
                  wrapper="span"
                  style={{ display: "inline-block" }}
                />
                <span className=" text-[#ffc40c]"> & </span>
              </span>{" "}
              <TypeAnimation
                sequence={[
                  "",
                  2000,
                  "AI NATIVE", // Types 'One'
                  1000,
                ]}
                wrapper="span"
                cursor={false}
                style={{ display: "inline-block" }}
              />
              <TypeAnimation
                className="text-[#ffc40c]"
                sequence={[
                  "",
                  3000,
                  "ENGINEER", // Types 'One'
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                style={{ display: "inline-block" }}
              />
              <span className="text-xl lg:text-5xl  font-Borel lg:mt-16 ">
                Brayan Paucar
              </span>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="rounded-full w-full lg:m-0 mx-10  bg-gradient-to-b from-yellow-400 via-red-500 to-yellow-400  p-7">
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
        <Mouse
          size={35}
          className="absolute bottom-0 right-[700px] animate-bounce"
        />
        <hr />
      </div>
    </AOSWrapper>
  );
}

export default Home;
