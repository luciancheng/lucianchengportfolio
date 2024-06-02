import TechstackSection from "./techstackSection";

const About = () => {
    const techstack = [
        {title: "Languages", images: ["python", "cpp", "c", "csharp", "html", "css", "js"]},
        {title: "Frameworks, Libraries and Technologies", images: ["pytorch", "react", "tailwind", "mongodb", "aws", "figma", "git", "github", "gitlab", "vscode"]}
    ];
    return ( 
        <div className="about" id="about">
            <h2>About</h2>
            <div className="seperator"></div>
            <div className="about-background-div">
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

                    <div className="about-background-info-skill frosted-glass">
                        <div className="skill-image">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div className="skill-description">Embedded Systems Development and Design</div>

                    </div>

                    <div className="about-background-info-skill frosted-glass">
                        <div className="skill-image">
                            <i class="fa-solid fa-dna"></i>
                        </div>
                        <div className="skill-description">End-to-End Biomedical Device Creation</div>
                    </div>
                    <div className="about-background-info-skill frosted-glass">
                        <div className="skill-image">
                            <i class="fa-solid fa-robot"></i>
                        </div>
                        <div className="skill-description">Machine Learning Pipeline and Deployment</div>
                    </div>
                    <div className="about-background-info-skill frosted-glass">
                        <div className="skill-image">
                            <i class="fa-solid fa-diagram-project"></i>
                        </div>
                        <div className="skill-description">Full-stack Application Development</div>
                    </div>
                </div>
            </div>
            <div className="about-techstack-container">
                <h3>My Tech Stack</h3>
                <div className="techstack-section-container">
                    {techstack.map((tech) => (
                        <TechstackSection techstack={tech}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default About;