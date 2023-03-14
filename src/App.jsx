import Home from "./pages/Home";
import GitHubLogo from "./assets/github.png";
import LinkedInLogo from "./assets/linkedin.png";
import TwitterLogo from "./assets/twitter.png";
import InstagramLogo from "./assets/instagram.png";
import MenuLogo from "./assets/menu.png";
import About from "./pages/About";
import Services from "./pages/Services";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="App bg-[#F8FAFC]">
      <div className=" flex justify-between mx-16 ">
        <div className="text-xl pt-2">DvJoan</div>
        <div className=" flex gap-7 items-center ">
          <div className="flex gap-2 hover:text-slate-600 cursor-pointer font-Source-Sans-Pro">
            <div className="pt-1 ">
              <img src={GitHubLogo} alt="github" />
            </div>
            <span>GitHub</span>
          </div>
          <div className="flex gap-2 hover:text-slate-600 cursor-pointer font-Source-Sans-Pro">
            <div className="pt-1">
              <img src={LinkedInLogo} alt="linkedin" />
            </div>
            <span>LinkedIn</span>
          </div>
          <div className="flex gap-2 hover:text-slate-600 cursor-pointer font-Source-Sans-Pro">
            <div className="pt-1">
              <img src={TwitterLogo} alt="twitter" />
            </div>
            <span>Twitter</span>
          </div>
          <div className="flex gap-2 hover:text-slate-600 cursor-pointer font-Source-Sans-Pro">
            <div className="pt-1">
              <img src={InstagramLogo} alt="instagram" />
            </div>
            <span className="">Instagram</span>
          </div>
        </div>
        <div className="">
          <button className=" font-Source-Sans-Pro px-4 py-2 rounded-md">
            <img src={MenuLogo} className="hover:text-slate-600" alt="menu" />
          </button>
        </div>
      </div>
      <hr className="my-3 w-full" />
      <Home />
      <About />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
