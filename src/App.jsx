import Home from "./pages/Home";
import GitHubLogo from "./assets/images/github.png";
import LinkedInLogo from "./assets/images/linkedin.png";
import TwitterLogo from "./assets/icons/twitter.png";
import InstagramLogo from "./assets/images/instagram.png";
import MenuLogo from "./assets/images/menu.png";
import About from "./pages/About";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import callIcon from "./assets/call.svg";
import mailIcon from "./assets/mail.svg";
import Testimonial from "./pages/Testimonial";
import AOSWrapper from "./utils/AOS";
import myLogo from "./assets/images/mylogo.png";

function App() {
  return (
    <div className="App">
      <AOSWrapper>
        <header
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className=" backdrop-blur-xl  sticky lg:static top-0 z-50 flex justify-between items-center lg:ml-16 lg:mr-7 lg:my-7"
        >
          <div className="flex justify-between gap-36 items-center">
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
            <img src={MenuLogo} alt="menuLogo" className="inline lg:hidden" />
          </div>
          <nav className="font-Source-Sans-Pro hidden lg:inline font-semibold tracking-wide ">
            <ul className="flex">
              <li title="My Github">
                <a
                  href="https://github.com/Dv-Joan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="px-3 py-2 shadow-sm hover:bg-slate-200 rounded-md"
                    src={GitHubLogo}
                    width={40}
                    height={20}
                    alt="github"
                  />
                </a>
              </li>

              <li title="My LinkedIn">
                <a
                  href="https://github.com/Dv-Joan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="px-3 py-2 shadow-sm hover:bg-slate-200 rounded-md"
                    src={LinkedInLogo}
                    width={40}
                    height={20}
                    alt="linkedin"
                  />
                </a>
              </li>

              <li title="My Twitter">
                <a
                  href="https://github.com/Dv-Joan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="px-3 py-2 shadow-sm hover:bg-slate-200 rounded-md"
                    src={TwitterLogo}
                    width={40}
                    height={20}
                    alt="twitter"
                  />
                </a>
              </li>

              <li title="My Ig">
                <a
                  href="https://github.com/Dv-Joan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="px-3 py-2 drop-shadow-sm hover:bg-slate-200 rounded-md"
                    src={InstagramLogo}
                    width={40}
                    height={20}
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </AOSWrapper>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Home />
      <About />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50" />
      <TechStack />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Experience />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Testimonial />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Contact />
      <footer>
        <hr className="lg:my-12 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
        <div className="flex justify-center lg:flex-row flex-col font-Source-Sans-Pro lg:gap-16">
          <div className="flex items-center">
            <img
              className="bg-[#403d39] w-12 duration-200 rounded-full p-3 m-3"
              src={callIcon}
              alt="callme"
            />

            <span className="font-semibold font-Source-Sans-Pro text-xl">
              +51 914 019 629
            </span>
          </div>
          <div className="flex items-center">
            <img
              className="bg-[#403d39] w-12 duration-200 rounded-full p-3 m-3"
              src={mailIcon}
              alt="callme"
            />

            <span className="font-semibold font-Source-Sans-Pro text-xl">
              jpm_2001@icloud.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
