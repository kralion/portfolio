import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/images/profile-pic.png";
import "../styles/styles.css";
import { Socials } from "../data";
import AOSWrapper from "../utils/AOS";
import backgroundImage from "../assets/gradient.png";
import { scroller as scrollSpy } from "react-scroll";
import {
  Menu as Burger,
  User,
  Code,
  Briefcase,
  Phone,
  X,
  HomeIcon,
} from "lucide-react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
export default function Home() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const scroller = scrollSpy;
  const handleSelectMobileMenu = (value) => {
    if (value) {
      scroller.scrollTo(value, {
        duration: 1000,
        delay: 0,
        smooth: true,
      });
      setOpenMenu(false);
    } else {
      scrollSpy.scrollTo("home", {
        duration: 1000,
        delay: 0,
        smooth: true,
      });
    }
  };

  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  }, []);
  return (
    <AOSWrapper>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="pb-20 mb-2 relative h-screen w-full flex flex-col lg:justify-center lg:items-center"
      >
        <header
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className=" lg:static lg:top-0 p-5  z-50 flex gap-16 items-center lg:p-10 lg:px-28"
        >
          <span className=" lg:block hidden text-6xl  font-Allura">
            Brayan Paucar
          </span>
          <div className="flex lg:hidden justify-between w-full items-center">
            <span className="text-3xl lg:text-6xl  font-Allura">
              Brayan Paucar
            </span>
            <Menu
              open={openMenu}
              handler={setOpenMenu}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <div
                  className={`transition ease-in-out duration-500 transform ${
                    openMenu ? "rotate-0" : "rotate-180"
                  }`}
                >
                  {openMenu ? <X size={30} /> : <Burger size={30} />}
                </div>
              </MenuHandler>

              <MenuList className="h-full rounded-none rounded-b-2xl border-none flex flex-col justify-start items-start gap-3 w-full p-3">
                <MenuItem
                  onClick={() => handleSelectMobileMenu("home")}
                  className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center"
                >
                  Home <HomeIcon size={15} />
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelectMobileMenu("about")}
                  className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center"
                >
                  About Me <User size={15} />
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelectMobileMenu("tech-stack")}
                  className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center"
                >
                  My Tech Stack <Code size={15} />
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelectMobileMenu("experience")}
                  className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center"
                >
                  Experience <Briefcase size={15} />
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelectMobileMenu("contact")}
                  value="contact"
                  className="active:bg-gray-100 p-4 flex gap-2 items-center justify-center"
                >
                  Contact Me <Phone size={15} />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <nav className="font-Source-Sans-Pro hidden lg:inline font-semibold tracking-wide ">
            <ul className="flex gap-3">
              {Socials.map((social, index) => (
                <li key={index} className="cursor-pointer">
                  <Tooltip placement="top" content={social.label}>
                    <a href={social.url} target="_blank" rel="noreferrer">
                      <IconButton color="white" variant="gradient" size="md">
                        <img
                          title={social.label}
                          src={social.logo}
                          alt={social.name}
                          width={30}
                          height={30}
                        />
                      </IconButton>
                    </a>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="flex  justify-center items-center lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between  lg:mx-28 mt-10 lg:mt-0 font-Inter ">
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
            <div className="flex flex-col gap-2 font-bold text-center text-5xl lg:text-6xl">
              <span>
                {" "}
                <TypeAnimation
                  sequence={["", 500, "WEB", 1000]}
                  cursor={false}
                  wrapper="span"
                  style={{ display: "inline-block" }}
                />
                <span className=" text-white/90"> & </span>
              </span>{" "}
              <TypeAnimation
                sequence={["", 2000, "MOBILE", 1000]}
                wrapper="span"
                cursor={false}
                style={{ display: "inline-block" }}
              />
              <TypeAnimation
                className="text-white/90"
                sequence={["", 3000, "DEVELOPER", 1000]}
                wrapper="span"
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </div>
          </div>

          <img
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-delay="500"
            className="absolute top-0 left-0 hidden lg:block "
            src={profilePic}
            alt="profilePic"
          />

          <img
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-delay="300"
            className="absolute  lg:bottom-0 lg:rounded-none rounded-full  bottom-28 mx-auto lg:right-0"
            src={profilePic}
            alt="profilePic"
          />
        </div>
        <ul className="flex gap-2 lg:hidden absolute bottom-4 left-4">
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
      </div>
    </AOSWrapper>
  );
}
