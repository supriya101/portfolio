import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2 className='halogn'>{props.title}</h2>
            <span className='yearclr'>{props.year}</span>
          </div>
        
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card