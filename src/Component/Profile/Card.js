import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='box btnn_shadow'>
        <a href={props.link} target='_blank' className='clr'>

                <img src={props.image} alt="" className='imgalignnn' />
                <h2>{props.title}</h2>
                <p className='pag'>{props.desc}</p>
                <i className='fas fa-arrow-right'></i>

                </a>

            </div>
    </>
  )
}

export default Card