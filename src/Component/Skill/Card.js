import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='box btnn_shadow'>
                <img src={props.image} alt="" className='imgalignforskills' />
                <h2>{props.title}</h2>
                
                
            </div>
    </>
  )
}

export default Card