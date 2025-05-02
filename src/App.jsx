import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Foot from "./components/Footer/Foot";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Foot />
    </>
  );
}

export default App;
