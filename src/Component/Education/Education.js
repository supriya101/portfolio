import React from "react"
import "./Education.css"
import Education_Api from "./Education_Api"
import Card from "./Card"
import d from "../pic/d.png"


const Education = () => {
  return (
    <>
      <section className='educ' id='resume'>
      <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${d})`,

          }}>
        <div className='container top'>
          <div className='heading text-center'>
          <h4>2013 - 2019</h4>
            <h1>MY EDUCATION</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              

              <div className='content'>
                {Education_Api.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
            <div className='left'>
              

              <div className='content'>
                {Education_Api.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Education