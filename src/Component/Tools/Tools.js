import React from 'react'
import Card from './Card'
import data from "./ToolsApi"
import "./Tools.css"
import d from "../pic/d.png"


function Tools() {
  return (
    <>
    <section className='features top' id='tools'>
    <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${d})`,

          }}>
        <div className='container'>
        <div className='heading text-center '>
            <h4>Tools I know</h4>
            <h1>Tools I Use</h1>
          </div>
       
        <div className='content ttgrid'>
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

export default Tools