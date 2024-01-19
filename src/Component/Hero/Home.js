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
            Professional Freelancer 
            <br /> & UI Designer
            </h2>
           
            <div className='hero_btn'>
           

<p>If you are seeking a Website Designer, SEO Specialist, Digital Marketing Executive, or Freelancer, I am confident in my ability to meet and exceed your expectations. 
</p>
            </div>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON</h4>
                <div className='button'>
                <a href='https://www.facebook.com/supriyasudir5' target='_blank'>
                  <button className='btn_shadoww'>
                    <i class='fab fa-facebook-f'></i>
                  </button></a>
                  <a href='https://www.instagram.com/aashisudir/' target='_blank'>
                  <button className='btn_shadoww'>
                    <i class='fab fa-instagram'></i>
                  </button> </a>
                  <a href='https://www.linkedin.com/in/supriya-sudir-a494b3115/' target='_blank'>
                  <button className='btn_shadoww'>
                    <i class='fab fa-linkedin-in'></i>
                  </button> </a>
                  <a href='https://www.youtube.com/@AashiSupriyaSudir' target='_blank'>
                  <button className='btn_shadoww'>
                    <i class='fab fa-youtube'></i>
                  </button> </a>
                  <a href='https://twitter.com/SupriyaSudir101' target='_blank'>
                  <button className='btn_shadoww'>
                    <i class='fab fa-twitter'></i>
                  </button></a>
                  <a href='https://www.pinterest.com/sudivguide/' target='_blank'>
                  <button className='btn_shadoww'>
                    <i class='fab fa-pinterest'></i>
                  </button> </a>
                </div>
              </div>
              
              
            </div>
            <br />

            

          {/*<div className='img'>
            <img src={hire} alt='' />
  </div> */}
          
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