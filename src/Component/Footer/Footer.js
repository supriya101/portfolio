import "./Footer.css"
import plogo from "../pic/plogo1.png"
import React, { useRef,useState } from "react"
import "../Contact/Contact.css"
import emailjs from "@emailjs/browser";

const Result =() => {
    return(
      <p>Sent Successfully</p>
    )
  }

const Footer = () => {
    const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7utvrsp",
        "template_k6bervc",
        form.current,
        "cbPnUhSJjbUdeHOtQ"
      )
      
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    showResult(true);
}
  return (
    <>
    <footer>
        <div className='container grid'>
            <div className='box'>
            <img src={plogo} alt='' />
            <p>I'm an experienced Digital Marketing Specialist with strong skills in WordPress development, SEO, social media optimization, and lead generation through Google Ads and other platforms. With over 5 years of experience, including 2 years in the UAE, I've refined my ability to create user-friendly websites and grow organic traffic.</p>
               <br />
                <div>
                <a href='https://wa.me/+971552099764' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-whatsapp'></i>
                  </button></a> 
                  &nbsp;
                <a href='https://www.facebook.com/supriyasudir5' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button></a> 
                  &nbsp;
                  <a href='https://www.instagram.com/aashi__16__/' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button> </a>

                  
                  <a href='https://www.linkedin.com/in/supriya-sudir-a494b3115/' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button> </a>
                  <a href='https://www.youtube.com/@AashiSupriyaSudir' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-youtube'></i>
                  </button> </a>
                  
                  &nbsp;

                  
                </div>
            </div>

            <div className='box'>
                <h2>Quick Links</h2>
                <ul>
                <a href='#home'><li>Home</li></a>
                    <a href='#about'><li>About</li></a>
                    <a href='#resume'><li>Work Experience</li></a>
                    <a href='#projects'><li>Projects</li></a>
                    <a href='#certifications'><li>Certifications</li></a>
                    <a href='#blogs'><li>Blogs</li></a>
                    <a href='#contact'><li>Contact</li></a>

                </ul>
            </div>

            
                <div className='box'>
                    <h2>Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input'>
                    <span>YOUR NAME</span>
                    <input type='text' name='user_name'/>
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='user_email'  />
                </div>
                <div className='input'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='user_phone'/>
                  </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message'></textarea>
                </div>
                <button className='btnnn_shadow '>
                SEND MESSAGE
                </button>

                <div className='ros'>
                      {result ? <Result /> : null}
                </div>
              </form>
                </div>

                    <div className='box'>
                        <h2>Get in Touch</h2>
                        <p>If you are looking for a Wordpress Developer, SEO Specialist, Social Media Optimizer, or Google Ads & Social Media Leads Generator. I am confident in my ability to meet and exceed your expectations.</p>

                    
                    <div className='icon'>
                        <i className='fas fa-location-arrow'></i>
                        <label htmlFor=''>Location: Dubai, UAE</label>
                    </div>
                    <div className='icon'>
                        <i className='fa fa-phone'></i>
                        <a href="tel:+971552099764" style={{color:'#ffffff'}}>Phone: +971 552099764</a>
                    </div>

                    <div className='icon'>
                        <i className='fa fa-envelope'></i>
                        <a href="mailto:supriyasudir@gmail.com" style={{color:'#ffffff'}}>Email: supriyasudir@gmail.com</a>
                    </div>

                    </div>
                    </div>

                    <div className='legal container'>
                        <p>Copyright @2024. All rights reserved.</p>
                        <label htmlFor=''>
                            Design & Developed by <span>Supriya Sudhir</span>
                        </label>
                    </div>
    </footer>
    
    </>
  )
}

export default Footer