import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import { Socials } from "../data";
import AOSWrapper from "../utils/AOS";
import backgroundImage from "../assets/gradient.png";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <AOSWrapper>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="pb-20 mb-2"
      >
        <header
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className=" backdrop-blur-xl lg:static top-0 z-50 flex justify-between items-center lg:p-10 lg:px-28"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-56 items-center">
              <a href="/">
                <span className="text-xl lg:text-6xl  font-Allura">
                  Brayan Paucar
                </span>
              </a>
              <Menu
                alt="menuLogo"
                className="inline lg:hidden"
                color="#ffc40c"
                size={30}
              />
            </div>
          </div>
          <nav className="font-Source-Sans-Pro hidden lg:inline font-semibold tracking-wide ">
            <ul className="flex gap-2">
              {Socials.map((social, index) => (
                <li key={index} className="cursor-pointer">
                  <a href={social.url} target="_blank" rel="noreferrer">
                    <img
                      title={social.label}
                      src={social.logo}
                      alt={social.name}
                      className="rounded border border-black/80  bg-transparent shadow-[0_0_2px_0.4px_rgba(0,0,0,0.30),_0_0_0px_4px_rgba(181,181,181,0.25)] active:bg-gradient-to-b active:from-gray-300 active:to-white active:shadow-[0_0_2px_0.4px_rgba(0,0,0,0.35),_0_0_0px_4px_rgba(206,206,206,0.25)] "
                      width={25}
                      height={25}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
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
              data-aos="fade-left"
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
      </div>
    </AOSWrapper>
  );
}
