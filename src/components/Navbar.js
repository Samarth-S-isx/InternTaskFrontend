import React, { useState,useEffect } from 'react'
import Modal from './Modal'

function Navbar({changeisLogged,isLogged,showModal,handleClick}) {
  const [isFixed,setisFixed]  = useState(false)


  return (
    <nav className={`navbar fixed-top ${showModal ? 'showmodal' : ''}`}>
        <div className="d-flex my-auto">
            <div className='p2 logo my-auto'><img src='https://res.cloudinary.com/dayc0s1py/image/upload/v1684234392/Images/whole_n8j4xy.png'></img></div>
            
            <form class="form-inline formsearch my-auto ">
              <input class="form-control searchbar mx-auto  " type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
            </form>
            {isLogged&&<div className="d-flex align-items-center user-info">
              <img src="https://res.cloudinary.com/dayc0s1py/image/upload/v1684234390/Images/Rectangle_3-3_l4dvx2.png" class="rounded-circle me-2"/>
              <span>Siddharth Goyal</span> <i className="fa fa-caret-down" style={{ marginLeft: '10px' }}></i>
            </div>}
            {!isLogged&&<div className='relement my-auto'>Create an account.<a className='link' onClick={handleClick}>It's Free</a></div>}
            
        </div>
        {showModal &&<Modal  changeisLogged={changeisLogged}handleClick={handleClick}/>}
    </nav>
  )
}

export default Navbar
