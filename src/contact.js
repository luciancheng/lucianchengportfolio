const Contact = () => {
    return ( 
        <div className="contact" id="contact">
            <h2>Contact</h2>
            <div className="seperator"></div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's Connect!</h3>
                    <div className="contact-socials-container">
        
                        <a href="mailto:luciancheng3@gmail.com" className="contact-social"  target="_blank" rel="noreferrer">
                            <i className="fa-2x fa-solid fa-envelope contact-social-img"></i>
                            <p className="contact-social-text">luciancheng3@gmail.com</p>
                        </a>
                        <a href="/" className="contact-social"  target="_blank" rel="noreferrer">
                            <i className="fa-2x fa-solid fa-phone contact-social-img"></i>
                            <p className="contact-social-text">+1 &#40;647&#41;-919-8636</p>
                        </a>
                        <div className="contact-socialmedia-container">
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
                </div>
                <div className="contact-form frosted-glass">
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required></input>
                        <input type="email" name="email" placeholder="someone@example.com" required></input>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;