import TechstackSection from "./techstackSection";
import {Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud'
import { useState, useEffect } from "react";


// props to pass into the cloud object

var initialCloudProps  = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        paddingTop: 40,
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2,
      activeCursor: "default",
      tooltip: "native",
      initial: [0.1, -0.1],
      clickToFront: 500,
      dragControl: true,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: 0.02,
      minSpeed: 0.01,
      // dragControl: false,
    },
  };

const useIcons = (slugs) => {
    const [icons, setIcons] = useState()
    useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])
    const bgHex = "#f3f2ef";
    const fallbackHex = "#6e6e73";
    const minContrastRatio = 1.2;
  
    if (icons) {
      return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
      }))
    }
    
    return <a>Loading</a>
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}
  

const About = () => {
    const techstack = [
        {title: "Languages", images: ["python", "cpp", "c", "csharp", "html", "css", "js", "ts"], id: 1},
        {title: "Frameworks, Libraries and Technologies", images: ["pytorch", "react", "tailwind", "mongodb", "nodejs", "expressjs", "mysql", "postgresql"], id: 2},
        {title: "Developer Tools", images: ["git", "github", "gitlab", "vscode", "aws", "gcd", "figma"], id: 3}
    ];

    const iconCloudTechstack = [
        "typescript", "javascript", "python", "cplusplus", "c", "csharp", "html5", "css3", "java",
        "pytorch", "numpy", "pandas", "react", "tailwindcss", "mongodb", "nodedotjs", "express", "spring",
        "amazonaws", "googlecloud", "figma", "mysql", "postgresql", "git", "github", "visualstudiocode", "gitlab",
        "dotnet", "nginx", "jira", "flask", "matlab", "arduino", "raspberrypi", "arm", "swift", "linux", "windows",
        "macos"
    ]

    

    const slugs = useIcons(iconCloudTechstack);

    const {height, width} = useWindowDimensions();

    const updatedCloudProps = {
        ...initialCloudProps,
        containerProps: {
          ...initialCloudProps.containerProps,
          style: {
            ...initialCloudProps.containerProps.style,
            width: width > 700 ? "500px" : "350px",
          },
        },
      };

    return ( 
        <div className="about" id="about">
            <div className="hidden hidden-header">
                <h2>About</h2>
                <div className="seperator"></div>
            </div>
            <div className="about-background-div hidden">
                <div className="about-background-info hidden">
                    <h3>What I Do</h3>
                    <div className="about-flexbox">
                        <div>
                            <h4>Hi, I'm <span className="about-animatedname">Lucian</span></h4>
                            <div className="about-paragraph">
                                I'm a fourth-year mechatronics and biomedical 
                                engineering student at McMaster University in Hamilton, Ontario.
                            </div>
                            <div className="about-paragraph">
                                As a passionate engineer, I strive to innovate and develop solutions to common problems that impact a large population.
                                I enjoy using my multidisciplinary skills in software, electrical, mechanical, and biomedical engineering to create projects from end-to-end development.
                            </div>
                            <div className="about-paragraph">
                                I especially love working with complex software, to develop full-stack applications which allow me to use all of my skills and experiences in embedded systems, healthcare, and machine learning, shaping innovative solutions.
                            </div>
                            <div className="about-paragraph">
                                Working in teams and individually are where I strive the most, being able to communicate and brainstorm ideas, leading to a more efficient development process for small and large scale projects.
                            </div>
            
                        </div>
                        
                        <div className="about-grid">
                            <div className="about-grid__item about-grid__item--1 frosted-glass">
                                <div className="skill-image">
                                    <i className="fa-solid fa-bolt"></i>
                                </div>
                                <div className="skill-description">Embedded Systems Development and Design</div>
                            </div>

                            <div className="about-grid__item about-grid__item--2 frosted-glass">
                                <div className="skill-image">
                                    <i className="fa-solid fa-dna"></i>
                                </div>
                                <div className="skill-description">End-to-End Biomedical Device Creation</div>
                            </div>

                            <div className="about-grid__item about-grid__item--3 frosted-glass">
                                <div className="skill-image">
                                    <i className="fa-solid fa-robot"></i>
                                </div>
                                <div className="skill-description">Machine Learning Pipeline and Deployment</div>
                            </div>

                            <div className="about-grid__item about-grid__item--4 frosted-glass">
                                <div className="skill-image">
                                    <i className="fa-solid fa-diagram-project"></i>
                                </div>
                                <div className="skill-description">Full-stack Application Development</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="about-techstack-container hidden">
                <h3>My Tech Stack</h3>
                <div className="techstack-flexbox">
                    <div className="techstack-section-container">
                        {techstack.map((tech) => (
                            <TechstackSection techstack={tech} key={tech.id}/>
                        ))}
                    </div>

                    <Cloud {...updatedCloudProps} className="icon-cloud">
                        {slugs}
                    </Cloud>
                </div>
                
            </div>
        </div>
     );
}
 
export default About;