import Home from "./pages/Home";
import GitHubLogo from "./assets/github.png";
import LinkedInLogo from "./assets/linkedin.png";
import TwitterLogo from "./assets/twitter.png";
import InstagramLogo from "./assets/instagram.png";
import MenuLogo from "./assets/menu.png";
import About from "./pages/About";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import callIcon from "./assets/call.svg";
import mailIcon from "./assets/mail.svg";
import Testimonial from "./pages/Testimonial";
import AOSWrapper from "./utils/AOS";
import myLogo from "./assets/mylogo.png";

function App() {
  return (

    <div className="App">
      <AOSWrapper>
        <header data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className=" backdrop-blur-xl  sticky lg:static top-0 z-50 flex justify-between lg:ml-16 lg:mr-7 lg:my-7">
          <div className="flex justify-between gap-36 items-center">

            <img data-aos="flip-up" data-aos-duration="1500" data-aos-delay="300" src={myLogo} height={10} width={150} alt="myLogo" />
            <img src={MenuLogo} alt="menuLogo" className="inline lg:hidden" />
          </div>
          <nav className="font-Source-Sans-Pro hidden lg:inline font-semibold tracking-wide ">
            <ul className="flex gap-5 mt-2">
              <li><a href="https://github.com/Dv-Joan" target="_blank" rel="noreferrer" >
                <div className="flex gap-2 px-3 py-1 border-[1px] border-zinc-200  rounded-md  cursor-pointer hover:bg-neutral-200">
                  <div className="pt-1  ">
                    <img src={GitHubLogo} alt="github" />
                  </div>
                  <span>GitHub</span>
                </div>
              </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/brayan-joan/" target="_blank" rel="noreferrer">
                  <div className="flex gap-2 px-3 py-1 border-[1px] border-zinc-200  rounded-md  cursor-pointer hover:bg-neutral-200">
                    <div className="pt-1">
                      <img src={LinkedInLogo} alt="linkedin" />
                    </div>
                    <span>LinkedIn</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="https://twitter.com/joanpaucar_" target="_blank" rel="noreferrer">
                  <div className="flex gap-2 px-3 py-1 border-[1px] border-zinc-200  rounded-md  cursor-pointer hover:bg-neutral-200">
                    <div className="pt-1">
                      <img src={TwitterLogo} alt="twitter" />
                    </div>
                    Twitter
                  </div>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/joan.paucar/" target="_blank" rel="noreferrer">

                  <div className="flex gap-2 px-3 py-1 border-[1px] border-zinc-200  rounded-md  cursor-pointer hover:bg-neutral-200">
                    <div className="pt-1">
                      <img src={InstagramLogo} alt="instagram" />
                    </div>
                    Instagram
                  </div>
                </a>
              </li>
            </ul>
          </nav>

        </header>
      </AOSWrapper>
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Home />
      <About />
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50" />
      <TechStack />
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Experience />
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Testimonial />
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Contact />
      <footer>
        <hr
          className="lg:my-12 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
        <div className="flex justify-center lg:flex-row flex-col font-Source-Sans-Pro lg:gap-16">

          <div className="flex items-center">
            <img className="bg-[#403d39] w-12 duration-200 rounded-full p-3 m-3" src={callIcon} alt="callme" />

            <span className="font-semibold font-Source-Sans-Pro text-xl">+51 914 019 629
            </span>
          </div>
          <div className="flex items-center">
            <img className="bg-[#403d39] w-12 duration-200 rounded-full p-3 m-3" src={mailIcon} alt="callme" />

            <span className="font-semibold font-Source-Sans-Pro text-xl">jpm_2001@icloud.com
            </span>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
