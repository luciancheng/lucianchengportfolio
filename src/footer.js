const Footer = () => {
    return ( 
        <div className="footer">
            <div className="seperator"></div>
            <div className="footer-container">
                <div className="footer-title">
                    <h3>Lucian Cheng</h3>
                    <p>Mechatronics and Biomedical Engineer</p>
                    <p>McMaster University - Hamilton, Ontario, Canada</p>
                    <p>Richmond Hill, Ontario, Canada</p>
                    <div className="footer-social-links">
                        <a href="https://github.com/luciancheng" className="contact-socialmedia"  target="_blank" rel="noreferrer">
                            <i className="fa-2x fa-brands fa-github contact-socialmedia-img"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/luciancheng/" className="contact-socialmedia"  target="_blank" rel="noreferrer">
                            <i className="fa-2x fa-brands fa-linkedin contact-socialmedia-img"></i>
                        </a>
                        <a href="https://www.instagram.com/lucian_cheng/" className="contact-socialmedia"  target="_blank" rel="noreferrer">
                            <i className="fa-2x fa-brands fa-instagram contact-socialmedia-img"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100010696634161" className="contact-socialmedia"  target="_blank" rel="noreferrer">
                            <i className="fa-2x fa-brands fa-facebook contact-socialmedia-img"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-nav">
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;