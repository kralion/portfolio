import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import { Element } from "react-scroll";
import AOSWrapper from "./utils/AOS";
function App() {
  return (
    <div className="App  overflow-x-hidden">
      <AOSWrapper>
        <Element name="home">
          <Home />
        </Element>
        <div className="space-y-44">
          <Element name="about">
            <About />
          </Element>
          <Element name="tech-stack">
            <TechStack />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </AOSWrapper>
    </div>
  );
}

export default App;
