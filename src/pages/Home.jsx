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
import backgroundImage from "../assets/gradient.jpg";
import profilePic from "../assets/images/profile-pic.png";
import ScrollAnimation from "../components/ScrollAnimation";
import { Socials } from "../data";
import "../styles/styles.css";
import AOSWrapper from "../utils/AOS";
export default function Home() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const navLinks = [
    {
      name: "Home",
      label: "home",
      icon: <HomeIcon size={15} className="mb-0.5" />,
    },
    {
      name: "About Me",
      label: "about",
      icon: <User size={15} className="mb-1" />,
    },
    {
      name: "My Tech Stack",
      label: "tech-stack",
      icon: <Code size={15} />,
    },
    {
      name: "Experience",
      label: "experience",
      icon: <Briefcase size={15} className="mb-0.5" />,
      delay: 400,
    },
    {
      name: "Contact",
      label: "contact",
      icon: <Phone size={15} className="" />,
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
        className="pb-20 mb-2 min-h-[100dvh] flex flex-col space-y-10 lg:justify-center items-center"
      >
        <header
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="flex lg:hidden w-full justify-between  items-center"
        >
          <span className="text-3xl m-4 lg:text-6xl   font-Allura">
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
                className={` transition ease-in-out duration-500 m-4 transform ${
                  openMenu ? "rotate-0" : "rotate-180"
                }`}
              >
                {openMenu ? <X size={30} /> : <Burger size={30} />}
              </div>
            </MenuHandler>

            <MenuList className="  bg-orange-100  rounded-lg border-none mt-4  w-screen   ">
              {navLinks.map((link, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleSelectMobileMenu(link.label)}
                  className={`p-4 flex gap-2 items-center  text-zinc-700 justify-center ${
                    activeLink === link.label
                      ? "active:opacity-80  bg-orange-400 text-black"
                      : ""
                  }`}
                >
                  {link.icon}
                  {link.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

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
        <div className="flex  justify-center items-center lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between  lg:mx-28 mt-16 lg:mt-0 font-Inter ">
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

        <ScrollAnimation />

        <img
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay="300"
          className=" lg:hidden w-[70%]  drop-shadow-lg   "
          src={profilePic}
          alt="profilePic"
        />
      </div>
    </AOSWrapper>
  );
}
