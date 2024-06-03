import { useState } from "react";

const Contact = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const scriptURL =
        "https://script.google.com/macros/s/AKfycbzYV1F5q8NwcK5Fk_5DA07vimOmTtlENwFno5j6ZL6H94fdLnGRBF5ovQ4z2MgwBIX0/exec";
        const form = document.forms["submit-to-google-sheet"];

        event.preventDefault();
        fetch(scriptURL, { method: "POST", body: inputs})
        .then((response) => {console.log("Success!", response)})
        .catch((error) => console.error("Error!", error.message));

        form.reset();
    }

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
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Your Name" value={inputs.name} onChange={handleChange} required></input>
                        <input type="email" name="Email" placeholder="someone@example.com" required value={inputs.email} onChange={handleChange}></input>
                        <textarea name="Message" rows="6" placeholder="Your Message" value={inputs.message} onChange={handleChange}></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;