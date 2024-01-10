import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import AOSWrapper from "../utils/AOS";

export default function Home() {
  return (
    <AOSWrapper>
      <div className="font-Inter ">
        <div className="flex relative lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between justify-center lg:mx-32 mx-5  ">
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-20"
          >
            <div className="flex flex-col gap-2 font-bold text-xl lg:text-6xl">
              <span>
                {" "}
                <TypeAnimation
                  sequence={["", 500, "WEB", 1000]}
                  cursor={false}
                  wrapper="span"
                  style={{ display: "inline-block" }}
                />
                <span className=" text-[#ffc40c]"> & </span>
              </span>{" "}
              <TypeAnimation
                sequence={["", 2000, "MOBILE", 1000]}
                wrapper="span"
                cursor={false}
                style={{ display: "inline-block" }}
              />
              <TypeAnimation
                className="text-[#ffc40c]"
                sequence={["", 3000, "DEVELOPER", 1000]}
                wrapper="span"
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="rounded-full w-full lg:m-0 mx-10  bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600  p-4">
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
      </div>
    </AOSWrapper>
  );
}
