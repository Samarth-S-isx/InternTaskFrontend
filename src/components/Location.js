import React from 'react'

function Location({isFixed,isLogged}) {
  return (
    <div className='location'>
    <div className={`give-location ${isFixed ? 'fixed' : ''}`}>
        <div className='location-option'>
        <div className='search-location '>
         <p><i class="fa fa-map-marker" aria-hidden="true"></i> Noida, India <i class="fa fa-times close" aria-hidden="true"></i></p>
        </div>
        <div className='permission'>
            <p>Your location will help us serve better and extend a personalised experience.</p>
        </div>
        </div>

        {isLogged&&<div className='recommended-groups '>
            <h5 className='recommend-header'>recommended Group</h5>
            <div className='d-flex group align-items-center justify-content-between'>
                <img src='https://res.cloudinary.com/dayc0s1py/image/upload/v1684234391/Images/Rectangle_6-3_yrcjbd.png'></img>
                <p className='name'>Leisure</p>
                <button className='followed text-center'>Followed</button>
            </div>
            <div className='d-flex group align-items-center justify-content-between'>
                <img src='https://res.cloudinary.com/dayc0s1py/image/upload/v1684234391/Images/Rectangle_6-3_yrcjbd.png'></img>
                <p className='name'>Leisure</p>
                <button className='follow text-center'>Follow</button>
            </div>
            <div className='d-flex group align-items-center justify-content-between'>
                <img src='https://res.cloudinary.com/dayc0s1py/image/upload/v1684234391/Images/Rectangle_6-3_yrcjbd.png'></img>
                <p className='name'>Leisure</p>
                <button className='follow text-center'>Follow</button>
            </div>
            <div className='d-flex group align-items-center justify-content-between'>
                <img src='https://res.cloudinary.com/dayc0s1py/image/upload/v1684234391/Images/Rectangle_6-3_yrcjbd.png'></img>
                <p className='name'>Leisure</p>
                <button className='follow text-center'>Follow</button>
            </div>
        </div>}
        
    </div>
    </div>
  )
}

export default Location
