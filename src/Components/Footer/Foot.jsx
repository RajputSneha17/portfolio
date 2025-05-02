import React from 'react'
import './Foot.css'

const Foot = () => {
  return (
    <div className='footer'>
      <p>Designed and Developed by Sneha &copy;</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/sneha-rajput-5102b0284/" target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://discord.com" title="My Discord: sneha_r13" target='_blank'><i className="fa-brands fa-discord"></i></a></li>
        <li><a href="mailto:sneharajput63154@gmail.com" target='_blank'><i className="fa-solid fa-envelope"></i></a></li>
        <li><a href="https://github.com/RajputSneha17" target='_blank'><i className="fa-brands fa-github"></i></a></li>
    </ul>
    </div>
  )
}

export default Foot
