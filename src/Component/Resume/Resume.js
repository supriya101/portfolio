import React from "react"
import "./Resume.css"
import Resume_Api from "./Resume_Api"
import Card from "./Card"

const Resume = () => {
  return (
    <div className='app-container'>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>6+ YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>Dec 2020 - April 2025</h4>
                <h1>Work Experience</h1>
              </div>

              <div className='content'>
                {Resume_Api.map((val, id) => {
                  if (val.category === "wrkexp") {
                    return <Card key={id} title={val.title} year={val.year} company={val.company} desc={val.desc} />
                  }
                })}
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>Oct 2019 - Nov 2020</h4>
                <h1>Internship Experience</h1>
              </div>

              <div className='content'>
                {Resume_Api.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} company={val.company} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume