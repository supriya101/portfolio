import React from "react"
import "./Portfolio.css"
import Cards from "./Cards"
import Portfolio_data from "./Portfolio_data"
import d from "../pic/d.png"


const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='projects'>
      <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${d})`,

          }}>
        <div className='container'>
          <div className='heading text-center '>
            <h4>CLIENTS PROJECTS</h4>
            <h1>Projects I Worked On</h1>
          </div>

          <div className='content mgrid'>
            {Portfolio_data.map((value, index) => {
              return <Cards key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} desc={value.desc} desc2={value.desc2} skills={value.skills} link={value.link} />
            })}

            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio