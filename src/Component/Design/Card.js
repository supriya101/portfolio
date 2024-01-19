import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='box btnn_shadow'>
        <a href={props.link} target='_blank' className='clr'>

                <img src={props.image} alt="" className='imgalign' />
                <img src={props.image2} alt="" className='imgalign' />

                <h2>{props.title}</h2>
                </a>
            </div>



    </>
  )
}

export default Card