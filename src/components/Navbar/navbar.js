import React from 'react'
import './navbar.css'
import logo_dp from './images/logo.png'

const Navbar = () => {
  return (
    <div className='main-navbar'>
        <img className='navbar-logo' src={logo_dp} alt='' />
        <div className='navbar-options'>
            <h3>00.Hello</h3>
            <h3>01.About</h3>
            <h3>02.Experiences</h3>
            <h3>03.Portfolio</h3>
            <button className='navbar-btn'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar;