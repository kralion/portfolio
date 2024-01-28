import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Home />
      <div className="space-y-44">
        <About />
        <TechStack />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
