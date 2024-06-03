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
        <div className="background-div"></div>
        <div className="circle circle-1"></div>
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
