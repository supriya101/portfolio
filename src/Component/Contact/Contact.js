import React, { useRef,useState } from "react"
import c from "../pic/c.png"
import "./Contact.css"
import emailjs from "@emailjs/browser";
import d from "../pic/d.png"


const Result =() => {
  return(
    <p>Sent Successfully</p>
  )
}

const Contact = () => {
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
      <section className='Contact' id='contact'>
      <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${d})`,

          }}>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT ME</h4>
            <h1>Let's Work Together</h1>
          </div>


          <div className='content contactcenter'>
            
            <div>
              
              <div className='box box_shodow'>
              <div className='backg' style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${c})`,

          }}>
         
                <div className='details'>
                  <h1>Supriya Sudhir</h1>
                  <p className='det'>Professional Freelancer & UI Designer</p> <br />
                  <p>I am available for freelance work. Connect with me via email or call.</p> <br />
                  <a href='tel:+971 552099764'><span>Phone: </span><p>+971 552099764</p> </a><br />
                 <a href='mailto:supriyasudir@gmail.com'><span>Email: </span><p>supriyasudir@gmail.com</p> </a> <br />
                 <span>Address:</span>  <p>Al Karama, Dubai</p> <br />
                  
                
                </div>
                </div>

              </div>
            </div>

          </div>

        </div>
        </div>
      </section>
    </>
  )
}

export default Contact