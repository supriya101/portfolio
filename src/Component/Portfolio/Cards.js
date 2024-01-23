import React, { useState } from "react"

const Cards = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>

              <p>➥ {props.desc}</p>
              <p>➥ {props.desc2}</p>
              <p>➥ {props.skills}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>

              {/*---------Leave Message----------  */}
              <div className='contact mtop'>
                <div className='left'>
              <a href={props.link} target='_blank'>
              <button className='home-btnn'> VIEW PROJECT
              <i class='fas fa-chevron-right'></i>
              </button>
              </a>
              </div>
              </div>
              {/*---------Leave Message----------  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cards