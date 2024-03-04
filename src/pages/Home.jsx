import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import {
  Briefcase,
  Menu as Burger,
  Code,
  HomeIcon,
  Phone,
  User,
  X,
} from "lucide-react";
import React, { useEffect } from "react";
import { scroller as scrollSpy } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../assets/gradient.png";
import profilePic from "../assets/images/profile-pic.png";
import DownIcon from "../assets/svg/down.svg";
import { Socials } from "../data";
import "../styles/styles.css";
import AOSWrapper from "../utils/AOS";
import ScrollAnimation from "../components/ScrollAnimation";
export default function Home() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const navLinks = [
    {
      name: "Home",
      label: "home",
      icon: <HomeIcon size={15} />,
    },
    {
      name: "About Me",
      label: "about",
      icon: <User size={15} />,
    },
    {
      name: "My Tech Stack",
      label: "tech-stack",
      icon: <Code size={15} />,
    },
    {
      name: "Experience",
      label: "experience",
      icon: <Briefcase size={15} />,
      delay: 400,
    },
    {
      name: "Contact Me",
      label: "contact",
      icon: <Phone size={15} />,
    },
  ];
  const scroller = scrollSpy;
  const [activeLink, setActiveLink] = React.useState("home");
  const handleSelectMobileMenu = (value) => {
    if (value) {
      scroller.scrollTo(value, {
        duration: 1000,
        delay: 0,
        smooth: true,
      });
      setActiveLink(value);
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
          className=" lg:hidden fixed lg:top-0 p-3 m-2  z-50 flex justify-between w-[95%] backdrop-blur-md bg-transparent border-b border-black/5  gap-16 items-center lg:p-10 lg:px-28"
        >
          <span className=" lg:block hidden text-6xl  font-Allura">
            Brayan Paucar
          </span>
          <div className="flex lg:hidden  justify-between w-full items-center">
            <span className="text-3xl lg:text-6xl  font-Allura">
              Brayan Paucar
            </span>

            <Menu
              open={openMenu}
              handler={setOpenMenu}
              placement="bottom-end"
              animate={{
                mount: { y: 0 },
                unmount: { y: 30 },
              }}
            >
              <MenuHandler>
                <div
                  className={` transition ease-in-out duration-500 transform ${
                    openMenu ? "rotate-0" : "rotate-180"
                  }`}
                >
                  {openMenu ? <X size={30} /> : <Burger size={30} />}
                </div>
              </MenuHandler>

              <MenuList className="h-[90%] backdrop-blur-md  bg-white/90  rounded-lg border-none flex flex-col mx-2 mt-4 justify-center items-start gap-3 w-[95%] ">
                {navLinks.map((link, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleSelectMobileMenu(link.label)}
                    className={`p-4 flex gap-2 items-center  text-zinc-700 justify-center ${
                      activeLink === link.label
                        ? "active:opacity-80 bg-orange-400 text-black"
                        : ""
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </MenuItem>
                ))}
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
        <header className="hidden lg:flex rounded-lg gap-16 justify-center items-center py-10 ">
          <span className=" lg:block hidden text-6xl  font-Allura">
            Brayan Paucar
          </span>
          <nav className="font-Source-Sans-Pro hidden lg:inline font-semibold tracking-wide ">
            <ul className="flex gap-3">
              {Socials.map((social, index) => (
                <li
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100 + 500}
                  key={index}
                  className="cursor-pointer"
                >
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
        <div className="flex  justify-center items-center lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between  lg:mx-28 mt-24 lg:mt-0 font-Inter ">
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
            <div className="flex flex-col gap-2 font-bold text-center text-5xl lg:text-6xl">
              <span>
                {" "}
                <TypeAnimation
                  sequence={["", 500, "WEB", 500]}
                  cursor={false}
                  wrapper="span"
                  style={{ display: "inline-block" }}
                />
                <span className=" text-white/90"> & </span>
              </span>{" "}
              <TypeAnimation
                sequence={["", 1000, "MOBILE", 500]}
                wrapper="span"
                cursor={false}
                style={{ display: "inline-block" }}
              />
              <TypeAnimation
                className="text-white/90"
                sequence={["", 2000, "DEVELOPER", 500]}
                wrapper="span"
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </div>
          </div>
        </div>
        {/* <img
          className=" hidden lg:flex absolute bottom-4 left-1/2  animate-bounce transform -translate-x-1/2 text-black/70 "
          src={DownIcon}
          alt="downIcon"
        /> */}
        <ScrollAnimation />

        <img
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="absolute lg:hidden  lg:bottom-0 lg:rounded-none rounded-full  bottom-28 mx-auto lg:right-0"
          src={profilePic}
          alt="profilePic"
        />
      </div>
    </AOSWrapper>
  );
}
