import React from "react"
import "./Certificate.css"
import Certificate_Api from "./Certificate_Api"
import Card from "./Card"
import d from "../pic/d.png"

const Certificate = () => {
  return (
    <>
      <section className='cert' id='certifications'>
      <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${d})`,

          }}>
        <div className='container top'>
          <div className='heading text-center'>
          <h4>My Courses and Certifications</h4>
            <h1>COURCES/CERTIFICATIONS</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='center'>
              

              <div className='content'>
                {Certificate_Api.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
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

export default Certificate