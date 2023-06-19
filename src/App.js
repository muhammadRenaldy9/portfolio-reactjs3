import About from "./components/About/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Galery from "./components/galery/Galery";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Skills />
      <Work />
      <Galery/>
      <Contact />
    </div>
  );
}

export default App;
