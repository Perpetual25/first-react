import React from 'react'
import Logo from './assets/shared/logo.svg'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
        <div className='logo'><img src={Logo} alt="" /></div>
        <div className='line'><hr /></div>
       <div className='list'>
        <ul>
            <li><span>00</span>Home</li>
            <li><span>01</span>Destination</li>
            <li><span>02</span>Crew</li>
            <li><span>03</span>Technology</li>
        </ul>
        </div>
        </div>

    </div>
  )
}

export default Navbar