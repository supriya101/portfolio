import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"


const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3><span>Hello, I’m Supriya Sudhir</span></h3>
            <br />
            <h2>
            Digital Marketing Specialist 
            <br />
            </h2>
           
            <div className='hero_btn'>
           

<p>If you are looking for a Wordpress Developer, SEO Specialist, Social Media Optimizer, or Google Ads & Social Media Leads Generator. I am confident in my ability to meet and exceed your expectations. 
</p>
            </div>
            <br />
            <a href='#contact'><button className='home-btn'>Hire Now</button></a>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON</h4>

              </div>
              
            </div>
            <div>
            <a href='https://wa.me/+971552099764' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-whatsapp'></i>
                  </button></a> 
                <a href='https://www.facebook.com/supriyasudir5' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button></a> 
                  &nbsp;

                  <a href='https://www.instagram.com/aashi__16__/' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button> </a>
                  &nbsp;

                  
                  <a href='https://www.linkedin.com/in/supriya-sudir-a494b3115/' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button> </a>
                  &nbsp;

                  <a href='https://www.youtube.com/@AashiSupriyaSudir' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-youtube'></i>
                  </button> </a>
                  &nbsp;

                  <a href='https://twitter.com/SupriyaSudir101' target='_blank'>
                  <button className='btnnn_shadow'> 
                    <i class='fab fa-twitter'></i>
                    
                  </button></a>
                  &nbsp;

                  
                </div>
            <br />



          
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home