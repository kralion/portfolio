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
        <header data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className=" flex justify-between ml-16 mr-7 my-7">
          {/* <h2 className="text-3xl pt-2 font-Satisfy drop-shadow-lg">Brayanjoan</h2> */}
          <img data-aos="flip-up" data-aos-duration="1500" data-aos-delay="300" src={myLogo} height={10} width={150} alt="myLogo" />
          <nav className="font-Source-Sans-Pro font-semibold tracking-wide ">
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
        class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Home />
      <About />
      <hr
        class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50" />
      <TechStack />
      <hr
        class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Experience />
      <hr
        class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Testimonial />
      <hr
        class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
      <Contact />
      <footer>
        <hr
          class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-80 " />
        <div className="flex justify-center font-Source-Sans-Pro gap-16">

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
