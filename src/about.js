import TechstackSection from "./techstackSection";
import { useEffect } from 'react';

const About = () => {
    const techstack = [
        {title: "Languages", images: ["python", "cpp", "c", "csharp", "html", "css", "js"], id: 1},
        {title: "Frameworks, Libraries and Technologies", images: ["pytorch", "react", "tailwind", "mongodb", "nodejs", "expressjs", "aws", "figma", "git", "github", "gitlab", "vscode"], id: 2}
    ];
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });
    return ( 
        <div className="about" id="about">
            <div className="hidden hidden-header">
                <h2>About</h2>
                <div className="seperator"></div>
            </div>
            <div className="about-background-div hidden">
                <div className="about-background-info">
                    <h3>What I Do</h3>
                    <p>
                        Hi, I'm Lucian, a fourth-year mechatronics and biomedical 
                        engineering student at McMaster University in Hamilton, Ontario.
                        As a passionate engineer, I strive to innovate and develop solutions to common problems that impact a large population.
                        I enjoy using my multidisciplinary skills in software, electrical, mechanical, and biomedical engineering to create projects from end-to-end development.
                        Working in teams and idividually are where I strive the most, being able to communicate and brainstorm activies, leading to a more efficient development process
                        for small and large scale projects. Thgouth my experiences, I transform concepts into reality using software, machine learning, and 
                        core engineering principles, shaping innovative solutions.
                    </p>
                    <div className="about-background-info-skill-container hidden">
                        <div className="about-background-info-skill frosted-glass hidden hidden-delayed">
                            <div className="skill-image">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <div className="skill-description">Embedded Systems Development and Design</div>
                        </div>

                        <div className="about-background-info-skill frosted-glass hidden hidden-delayed">
                            <div className="skill-image">
                                <i className="fa-solid fa-dna"></i>
                            </div>
                            <div className="skill-description">End-to-End Biomedical Device Creation</div>
                        </div>
                        <div className="about-background-info-skill frosted-glass hidden hidden-delayed">
                            <div className="skill-image">
                                <i className="fa-solid fa-robot"></i>
                            </div>
                            <div className="skill-description">Machine Learning Pipeline and Deployment</div>
                        </div>
                        <div className="about-background-info-skill frosted-glass hidden hidden-delayed">
                            <div className="skill-image">
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                            <div className="skill-description">Full-stack Application Development</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-techstack-container hidden">
                <h3>My Tech Stack</h3>
                <div className="techstack-section-container">
                    {techstack.map((tech) => (
                        <TechstackSection techstack={tech} key={tech.id}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default About;