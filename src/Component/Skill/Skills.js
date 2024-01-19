import React from 'react'
import Card from './Card'
import data from "./SkillsApi"
import "./Skills.css"
import e from "../pic/e.png"


function Skiils() {
  return (
    <>
    <section className='features top' id='skills'>
    <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${e})`,

          }}>
        <div className='container'>
        <div className='heading text-center '>
            <h4>Skills I know</h4>
            <h1>My Skills</h1>
          </div>
        <div className='content sssgrid'>
            {data.map((val,index) => {
                return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
            })}
            
           

        </div>


        </div>
</div>
    </section>
    
    
    </>
  )
}

export default Skiils