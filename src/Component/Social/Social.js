import React from 'react'
import Card from './Card'
import data from "./Social_Api"
import "./Social.css"
import e from "../pic/e.png"


function Social() {
  return (
    <>
    <section className='features top' id='social'>
    <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${e})`,

          }}>
        <div className='container'>
        <div className='heading text-center '>
            <h4>SOCIAL MEDIA GRAPHS</h4>
            <h1>Social Media Graphs Update</h1>
          </div>
        <div className='content mmgrid'>
            {data.map((val,index) => {
                return <Card key={index} image={val.image} title={val.title} desc={val.desc} link={val.link}/>
            })}
            
           

        </div>


        </div>
        </div>

    </section>
    
    
    </>
  )
}

export default Social