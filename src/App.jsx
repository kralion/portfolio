import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import { Element } from "react-scroll";
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
