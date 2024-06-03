import Tilt from 'react-parallax-tilt';
import resume from "./files/LC_resume.pdf";

const Intro = () => {
    return (  
        <div className="intro">
            <div className="intro-section">
                <div className="intro-section2">
                    <div className="intro-greeting">
                        Lucian Cheng
                    </div>
                    <div className="intro-background">
                        Mechatronics and Biomedical Engineer
                    </div>
                    <div className="intro-links">
                        <a className="resume-button" href={resume} target="_blank" rel="noreferrer">Resume</a>
                        <a className="intro-link-images" href="https://github.com/luciancheng" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github social-link"></i>
                        </a>
                        <a className="intro-link-images" href="https://www.linkedin.com/in/luciancheng/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin social-link"></i>
                        </a>
                    </div>
                </div>
            </div>
            <Tilt>
                <div className="profile-picture" data-tilt data-tilt-glare></div>
            </Tilt>
        </div>
    );
}
 
export default Intro;