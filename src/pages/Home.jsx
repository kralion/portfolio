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
  Moon,
  Phone,
  Sun,
  User,
  X,
} from "lucide-react";
import useSound from "use-sound";
import React, { useEffect, useState } from "react";
import { scroller as scrollSpy } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../assets/gradient.svg";
import profilePic from "../assets/images/profile-pic.png";
import { Header } from "../components/Header";
import { Socials } from "../data";
import "../styles/styles.css";
import switchOffSound from "../../public/sounds/switch-off.mp3";
import switchOnSound from "../../public/sounds/switch-on.mp3";
import menuSound from "../../public/sounds/menu-open.mp3";

export default function Home() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [darkIcon, setDarkIcon] = useState(<Moon size={20} />);
  const scroller = scrollSpy;
  const [activeLink, setActiveLink] = React.useState("home");
  const [openMenu, setOpenMenu] = React.useState(false);
  const [playOn] = useSound(switchOnSound);
  const [playOff] = useSound(switchOffSound);
  const [playMenu] = useSound(menuSound);

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

  const handleSelectMobileMenu = (value) => {
    playMenu();
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
  function handleModeToggle() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
      setDarkIcon(<Sun size={20} />);
      playOn();
    } else {
      document.documentElement.classList.remove("dark");
      setDarkIcon(<Moon size={20} />);
      playOff();
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  }, []);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="pb-20 mb-2 min-h-[100dvh] dark:bg-zinc-800 flex flex-col lg:justify-around  space-y-10 lg:items-end"
    >
      <Header>
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
            <MenuItem
              onClick={handleModeToggle}
              className="p-4 flex gap-2 items-center  text-zinc-700 justify-center"
            >
              {darkIcon}
              {localStorage.theme === "dark" ? "Dark Mode" : "Light Mode"}
            </MenuItem>
          </MenuList>
        </Menu>
      </Header>
      <img
        data-aos="fade-in"
        data-aos-duration="1000"
        className="hidden lg:absolute lg:left-40 top-8 lg:inline drop-shadow-xl rounded-full"
        src={profilePic}
        width={350}
        alt="profilePic"
      />
      <nav className="hidden lg:flex gap-10 w-[600px] justify-between items-center font-Inter font-semibold tracking-wide text-lg ">
        <header className="hidden lg:flex lg:flex-col rounded-lg gap-6   py-10 ">
          <span className=" lg:block hidden text-5xl  font-Allura">
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
        </header>{" "}
        <button
          onClick={handleModeToggle}
          className="duration-500 fixed bottom-5 left-5 active:rotate-90 border-2 bg-black dark:bg-white text-white dark:text-black dark:border-white/90 border-black/90 rounded-full p-2"
        >
          {darkIcon}
        </button>
      </nav>

      <div className="flex  justify-center items-center lg:flex-row gap-10 lg:gap-0 flex-col-reverse lg:justify-between  lg:mx-28 mt-16 lg:mt-0 font-Inter ">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <div className="flex flex-col gap-2 font-bold text-center text-5xl lg:text-6xl">
            <span>
              {" "}
              <TypeAnimation
                sequence={["", 500, "WEB", 500]}
                cursor={false}
                wrapper="span"
                className="text-orange-500 dark:text-white"
                style={{ display: "inline-block" }}
              />
              <span className=" text-black"> & </span>
            </span>{" "}
            <TypeAnimation
              sequence={["", 1000, "MOBILE", 500]}
              wrapper="span"
              className="text-black dark:text-white"
              cursor={false}
              style={{ display: "inline-block" }}
            />
            <TypeAnimation
              className="text-black "
              sequence={["", 2000, "DEVELOPER", 500]}
              wrapper="span"
              cursor={true}
              style={{ display: "inline-block" }}
            />
          </div>
        </div>
      </div>
      <img
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-delay="300"
        className=" lg:hidden drop-shadow-lg   "
        src={profilePic}
        alt="profilePic"
      />
    </div>
  );
}
