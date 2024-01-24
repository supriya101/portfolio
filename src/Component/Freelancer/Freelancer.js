import React from "react"
import "./Freelancer.css"
import Resume_Api from "./Freelancer_Api"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>FREELANCING PROJECTS</h4>
            <h1>My Freelancing Projects</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>Aug 2022 - Sept 2022</h4>
                <h1>Amazon Freelancing Project</h1>
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
                <h4>March 2022 - Nov 2022</h4>
                <h1>Wordpress Developer Sites</h1>
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
    </>
  )
}

export default Resume