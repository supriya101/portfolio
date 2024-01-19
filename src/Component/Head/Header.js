import React, { useState } from "react"
import "./Header.css"
import plogo from "../pic/plogo.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          
          <div className='logo'>
            <img src={plogo} alt='' />
            
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>services</a>
              </li>
              <li>
                <a href='#resume'>eduaction</a>
              </li>
              <li>
                <a href='#clients'>Experience</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#certifications'>Certifications</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#tools'>Tools</a>
              </li>
              <li>
                <a href='#blogs'>Blogs</a>
              </li>
              <li>
                <a href='#social'>Social</a>
              </li>
              <li>
                <a href='#design'>Designs</a>
              </li>
              <li>
              <a href='#contact'><button className='home-btn'>Contact</button></a>

              </li>
          
              
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header