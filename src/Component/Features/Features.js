import React from 'react'
import Card from './Card'
import data from "./FeaturesApi"
import "./Features.css"


function Features() {
  return (
    <>
    <section className='features top' id='features'>
  
        <div className='container'>
            <div className='heading'>
                <h4>SERVICES</h4>
                <h2>I Provide Wide Range Of Services</h2>
                
                <button className='btn_shadow prev_btn'>
                <i class='fas fa-arrow-left'></i>
              </button>
              <button className='btn_shadow next_btn'>
                <i class='fas fa-arrow-right'></i>
              </button>
            </div>
            
        <div className='content grid'>
            {data.map((val,index) => {
                return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
            })}
            
           

        </div>


        </div>

    </section>
    
    
    </>
  )
}

export default Features