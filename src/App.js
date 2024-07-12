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
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -8" result="goo" />
                
                {/* <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" /> */}
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="circle g1"></div>
            <div className="circle g2"></div>
            <div className="circle g3"></div>
            <div className="circle g4"></div>
          </div>
        
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
