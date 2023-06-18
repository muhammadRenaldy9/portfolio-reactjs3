import About from "./components/About/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
