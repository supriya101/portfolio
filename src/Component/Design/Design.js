import React from 'react'
import Card from './Card'
import data from "./Design_Api"
import "./Design.css"
import e from "../pic/e.png"


function Design() {
  return (
    <>
    <section className='features top' id='design'>
    <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${e})`,

          }}>
        <div className='container'>
        <div className='heading text-center '>
            <h4>CLIENT DESIGN PROJECTS</h4>
            <h1>My Page Design For Clients</h1>
          </div>
        <div className='content mmsdgrid'>
            {data.map((val,index) => {
                return <Card key={index} image={val.image} image2={val.image2} title={val.title} desc={val.desc} link={val.link}/>
            })}
            
           

        </div>


        </div>

        <br />
</div>
    </section>
    
    
    </>
  )
}

export default Design