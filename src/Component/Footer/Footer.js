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
            <p>Experienced Freelancer with expertise in UI design, SEO, Digital Marketing, and Lead Generation. With over 4 years of experience, I create visually appealing websites, implement SEO strategies, and maximize brand visibility using social media. I aim to provide high-quality solutions for clients.</p>
               <br />
                <div>
                <a href='https://www.facebook.com/supriyasudir5' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button></a> 
                  &nbsp;
                  <a href='https://www.instagram.com/aashisudir/' target='_blank'>
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
                  <a href='https://twitter.com/SupriyaSudir101' target='_blank'>
                  <button className='btnnn_shadow'> 
                    <i class='fab fa-twitter'></i>
                    
                  </button></a>
                  &nbsp;

                  <a href='https://www.pinterest.com/sudivguide/' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-pinterest'></i>
                  </button> </a>
                  
                </div>
            </div>

            <div className='box'>
                <h2>Quick Links</h2>
                <ul>
                <a href='#home'><li>Home</li></a>
                    <a href='#features'><li>Services</li></a>
                    <a href='#resume'><li>Education</li></a>
                    <a href='#clients'><li>Work Experience</li></a>
                    <a href='#certifications'><li>Certifications</li></a>
                    <a href='#skills'><li>Skiils</li></a>
                    <a href='#tools'><li>Tools</li></a>
                    <a href='#projects'><li>Projects</li></a>
                    <a href='#blogs'><li>Blogs</li></a>
                    <a href='#social'><li>Social Media</li></a>
                    <a href='#design'><li>Page Design</li></a>
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
                        <p>If you are seeking a Website Designer, SEO Specialist, Digital Marketing Executive, or Freelancer, I am confident in my ability to meet and exceed your expectations. </p>

                    
                    <div className='icon'>
                        <i className='fas fa-location-arrow'></i>
                        <label htmlFor=''>Location: Al, Karama Dubai, UAE</label>
                    </div>
                    <div className='icon'>
                        <i className='fa fa-phone'></i>
                        <label htmlFor=''>Phone: +971 552099764</label>
                    </div>

                    <div className='icon'>
                        <i className='fa fa-envelope'></i>
                        <label htmlFor='/'>Email: supriyasudir@gmail.com</label>
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