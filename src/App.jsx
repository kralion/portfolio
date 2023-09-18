import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import AOSWrapper from "./utils/AOS";
import myLogo from "./assets/images/mylogo.png";
import Socials from "./data/socials.json";
import { Mail, PhoneCall, Menu } from "lucide-react";

function App() {
  return (
    <div className="App">
      <AOSWrapper>
        <header
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className=" backdrop-blur-xl  sticky lg:static top-0 z-50 flex justify-between items-center lg:m-5"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-56 items-center">
              <a href="/">
                <img
                  data-aos="flip-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                  src={myLogo}
                  height={10}
                  width={150}
                  alt="myLogo"
                />
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
            <ul className="flex gap-3.5">
              {Socials.map((social) => (
                <li className="cursor-pointer" key={social.name}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <img
                      title={social.label}
                      src={social.logo}
                      alt={social.name}
                      className="hover:opacity-70 duration-200 "
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </AOSWrapper>

      <Home />
      <About />

      <TechStack />

      <Experience />

      <Testimonial />

      <Contact />
      <footer>
        <div className="flex justify-center m-3 lg:mx-0 lg:mb-7 font-Source-Sans-Pro gap-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/51914019629"
            className="flex cursor-pointer hover:opacity-70 items-center gap-2"
          >
            <PhoneCall color="#ffc40c" />
            +51 914 019 629
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:jpm_2001@icloud.com?subject=Contact to DvJoan,%20J!&body=Hi Joan,%20I see your portfolio and ... !
            "
            className="flex cursor-pointer hover:opacity-70 items-center gap-2"
          >
            <Mail color="#ffc40c" />
            jpm_2001@icloud.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
