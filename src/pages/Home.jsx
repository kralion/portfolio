import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import { Socials } from "../data";
import AOSWrapper from "../utils/AOS";
import backgroundImage from "../assets/gradient.png";
import { Menu as Burger, User, Code, Briefcase, Phone } from "lucide-react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

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
          className=" backdrop-blur-xl lg:static lg:top-0 p-5  z-50 flex justify-between items-center lg:p-10 lg:px-28"
        >
          <div className="flex justify-between w-full items-center">
            <a href="/">
              <span className="text-2xl lg:text-6xl  font-Allura">
                Brayan Paucar
              </span>
            </a>
            <Menu>
              <MenuHandler>
                <Burger
                  alt="menuLogo"
                  className="inline lg:hidden"
                  color="#000"
                  size={30}
                />
              </MenuHandler>
              <MenuList className="h-2/3 rounded-none rounded-b-2xl border-none flex flex-col justify-start items-start gap-3 w-full p-3">
                <MenuItem className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center">
                  About Me <User size={15} />
                </MenuItem>
                <MenuItem className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center">
                  My Tech Stack <Code size={15} />
                </MenuItem>
                <MenuItem className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center">
                  Experience <Briefcase size={15} />
                </MenuItem>
                <MenuItem className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center">
                  Contact Me <Phone size={15} />
                </MenuItem>
              </MenuList>
            </Menu>
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
        <div className="font-Inter  ">
          <div className="flex relative justify-center items-center lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between  lg:mx-28   ">
            <div
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="lg:mt-20 "
            >
              <div className="flex lg:flex-col gap-2 font-bold text-2xl lg:text-6xl">
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
                  className="lg:text-[#ffc40c] text-black"
                  sequence={["", 3000, "DEVELOPER", 1000]}
                  wrapper="span"
                  cursor={true}
                  style={{ display: "inline-block" }}
                />
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="rounded-full w-full lg:m-0 lgmx-10 p-4">
                <div className="flex  rounded-full h-full w-full items-center justify-center">
                  <img
                    src={profilePic}
                    alt="profilePic"
                    className="rounded-full  shadow-yellow-600 shadow-xl p-1 border-4 border-none"
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
