import React from "react"
import "./About.css"
import heroo from "../pic/heroo.png"
import e from "../pic/e.png"


const About = () => {
  return (
    <>
      <section className='aboutpage' id='about'>
      
     
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
          <h4>Digital Marketing Specialist & Wordpress Developer</h4>
            <p> I’m an experienced Digital Marketer Specialist with a strong knowledge of WordPress development, SEO, Social Media Optimization, Google Ads and other social media platform lead generators.</p>
            <p> With over 5 years of experience in digital marketing, including 2 years in the UAE, I’ve improved my skills in creating attractive, user-friendly websites and boost website traffic organically.  </p>
            
            <p> 
            If you are looking a Wordpress Developer, SEO Specialist, Social Media Optimizer, or Google Ads & Social Media Leads Generator, I am confident in my ability to meet and exceed your expectations. 
            </p>   
            <br />
            <div className='aligncv'>
            <a href='Supriya Sudhir Resume.pdf' download='Supriya Sudhir Resume.pdf'>
            <button className='about-btn'>Download CV</button>
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp;

            <a href='Supriya Sudhir Portfolio.pdf' download='Supriya Sudhir Portfolio.pdf'>
            <button className='about-btn'>Download Portfolio</button>
            </a>
            </div>
            </div>
            </div>

        </div>
        </div>
      </section>
    </>
  )
}

export default About