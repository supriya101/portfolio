import React from "react"
import Card from "./Card"
import "./Blog.css"
import Blog_Api from "./Blog_Api"
import "../Portfolio/Portfolio.css"
import d from "../pic/d.png"


const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blogs'>
      <div style={{
                backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${d})`,

          }}>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>RANKING BLOGS</h4>
            <h1>Blogs I Ranked For Firstcry Parenting Site</h1>
          </div>

          <div className='content grid'>
         
            {Blog_Api.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} desc_one={value.desc_one} desc_two={value.desc_two} link={value.link} />
            })}
          </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Blog