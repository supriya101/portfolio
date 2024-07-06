import React from 'react'
import Card from './Card'
import data from "./Profile_Api"
import "./Profile.css"
import d from "../pic/d.png"


function Profile() {
  return (
    <>
    <section className='features top' id='social'>
    <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${d})`,

          }}>
        <div className='container'>
        <div className='heading text-center '>
            <h4>My Personal Bloging Site and Other Data</h4>
            <h1> Performance on Google Site</h1>
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

export default Profile