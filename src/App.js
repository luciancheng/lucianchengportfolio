import Navbar from "./navbar";
import Intro from "./intro";
import About from "./about";
import Experience from "./Experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
        <div className="background-div">
          <div className="circle g1"></div>
          <div className="circle g2"></div>
          <div className="circle g3"></div>
          <div className="circle g4"></div>
        </div>
        <Navbar/>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
