import React from "react"
import "./About.css"
import heroo from "../pic/heroo.png"
import e from "../pic/e.png"


const About = () => {
  return (
    <>
      <section className='aboutpage' id='home'>
      
     
      <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${e})`,

          }}>


        <div className='container f_flex clrwhite'>
            
      <br />
          <div className='left'>
          <div className='about-img'>
          <img src={heroo} alt='' />
          </div>
          </div>


          <div className='right'> 
          <div className='headings'>
          <h3>ABOUT ME</h3>
          <h4>Freelancer & UI Designer</h4>
            <p>I am an experienced Freelancer with a strong knowledge of UI design, SEO, Digital Marketing, and Lead Generation. </p>
            <p>With more than 4 years  of experience, I have improved my skills in creating visually appealing and user-friendly websites. 
            I am skilled  at implementing effective SEO strategies that enhance online visibility and generate organic traffic.
            I have a strong background in digital marketing for various aspects and am skilled at using social media channels to maximize brand visibility. </p> 
            
            <p>As a professional, my goal is to provide clients with high-quality solutions which help their goals. 
            If you are seeking a Website Designer, SEO Specialist, Digital Marketing Executive, or Freelancer, I am confident in my ability to meet and exceed your expectations. 
            </p>   
            <br />
            <button className='about-btn'>Download CV</button>
   
            </div>
            </div>

        </div>
        </div>
      </section>
    </>
  )
}

export default About