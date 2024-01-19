import React from "react"
import f_logo from "./pic/f_logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={f_logo} alt='' />
          </div>
          <p>© 2024. All rights reserved by Supriyasudir-Themes.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
