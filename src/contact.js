import { useState } from "react";

const Contact = () => {

    const [inputs, setInputs] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [sentProperly, setSentProperly] = useState(0);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        setIsPending(true);
        event.preventDefault();

        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwSrqXwr3T8VkQvaPwbHK_O-IncIc4e0NzW8S6mwu95WAKCPNgRBFQALqyJE1dkFq5ntw/exec";
        const form = document.forms["submit-to-google-sheet"];

        const formattedForm = new FormData(form);

        fetch(scriptURL, { method: 'POST', body: formattedForm})
            .then(response => {
                setIsPending(false);
                setSentProperly(1);
                form.reset();})
            .catch(error => {
                setSentProperly(2);
                setIsPending(false);});
    }
    

    return ( 
        <div className="contact" id="contact">
            <div className="hidden hidden-header">
                <h2>Contact</h2>
                <div className="seperator"></div>
            </div>
            <div className="contact-container hidden">
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
                        </div>
                    </div>
                </div>
                <div className="contact-form frosted-glass">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Your Name" value={inputs.name} onChange={handleChange} required></input>
                        <input type="email" name="Email" placeholder="someone@example.com" required value={inputs.email} onChange={handleChange}></input>
                        <textarea name="Message" rows="6" placeholder="Your Message" value={inputs.message} onChange={handleChange}></textarea>
                        <div className="form-bottom">
                            <button type="submit">Send</button>
                            {isPending && <div className="send-status send-pending">Sending...</div>}
                            {sentProperly === 1 && !isPending && <div className="send-status send-success">Sent Successfully!</div>}
                            {sentProperly === 2 && !isPending && <div className="send-status send-error">Error Sending</div>}
                        </div>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;