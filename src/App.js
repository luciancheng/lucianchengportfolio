import Navbar from "./navbar";
import Intro from "./intro";
import About from "./about";
import Experience from "./Experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import React from 'react';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    if (!interBubble) {
      console.error("Interactive element not found");
      return;
    }

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX);
      curY += (tgY - curY);
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    function handleMouseMove(event) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


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
            <div className="interactive"></div>
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
