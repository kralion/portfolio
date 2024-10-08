import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
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
import React, { useEffect, useState } from "react";
import { scroller as scrollSpy } from "react-scroll";
import useSound from "use-sound";
import menuSound from "../../public/sounds/menu-open.mp3";
import switchOffSound from "../../public/sounds/switch-off.mp3";
import switchOnSound from "../../public/sounds/switch-on.mp3";
import backgroundImage from "../assets/gradient.svg";
import ProfileSvg from "../assets/svg/profile.svg";
import { Header } from "../components/Header";
import { FlipWords } from "../components/flip-words";
import { Socials } from "../data";
import "../styles/styles.css";

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
  const words = ["WEB", "MOBILE", "DESKTOP"];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1200px",
        backgroundPositionY: "-300px",
      }}
      className=" mb-2 min-h-[100dvh]  dark:bg-black flex  lg:justify-center lg:items-center gap-20 flex-col   "
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

          <MenuList className="  bg-orange-100  rounded-lg border-none   w-screen   ">
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
      <div className="-space-y-10">
        <img
          data-aos="fade-in"
          data-aos-easing="ease-out-cubic"
          className="hidden lg:inline  "
          src={ProfileSvg}
          width={400}
          alt="profilePic"
        />
        <span className=" lg:block hidden font-thin font-Allura  text-6xl  ">
          Brayan Paucar
        </span>
      </div>

      <nav className=" flex gap-4  justify-between items-center font-Obviously font-semibold tracking-wide text-lg ">
        <div className="flex flex-col gap-10 w-screen justify-between items-center  font-Obviously font-semibold tracking-wide text-lg ">
          <img
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-delay="300"
            className=" lg:hidden   drop-shadow-lg   "
            src={ProfileSvg}
            alt="profilePic"
          />
          <div className="lg:text-7xl lg:mt-0  -mt-14  text-4xl text-neutral-600  dark:text-neutral-400    ">
            <FlipWords
              className="text-orange-500 mb-2 font-black font-Obviously"
              words={words}
            />
            <br />
            DEVELOPER
          </div>{" "}
          <section className="font-Obviously hidden lg:inline font-semibold tracking-wide ">
            <ul className="flex gap-3">
              {Socials.map((social, index) => (
                <li
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100 + 500}
                  key={index}
                  className="cursor-pointer"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    className="hover:opacity-80"
                    rel="noreferrer"
                  >
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
                </li>
              ))}
            </ul>
          </section>
        </div>
        <button
          onClick={handleModeToggle}
          className="duration-500 z-50 fixed bottom-5 left-5 active:rotate-90 border-2 bg-black dark:bg-white text-white dark:text-black dark:border-white/90 border-black/90 rounded-full p-2"
        >
          {darkIcon}
        </button>
      </nav>
    </div>
  );
}
