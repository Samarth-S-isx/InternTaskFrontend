import React from 'react'

function Card(props) {
  return (
    <div class="card mb-3">
        <img src="https://res.cloudinary.com/dayc0s1py/image/upload/v1684234391/Images/Rectangle_5-2_e2pia0.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <p className='category'>Article</p>
            <div className='d-flex'>
            <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
            <div className="dropdown">
                <button className="dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><button className="dropdown-item" type="button">Edit</button></li>
                  <li><button className="dropdown-item" type="button">Report</button></li>
                  <li><button className="dropdown-item" type="button">Option 3</button></li>
                </ul>
            </div>
            </div>
              <p className="card-text text-truncate">I’ve worked in UX for the better part of a decade. From now on, I plan to</p>
            <div className='d-flex align-items-center'>
              <div>
                <img src="https://res.cloudinary.com/dayc0s1py/image/upload/v1684234390/Images/Rectangle_3-3_l4dvx2.png" class="rounded-circle me-2"/>     
              </div>
              <div className='d-flex icons my-auto'>
                <div className='user my-auto'>Siddharth Goyal
                  <div className='views2'>  <i class="fa fa-eye"></i><p>1.4k views</p></div>
               </div>
                <div className='d-flex views'>  <i class="fa fa-eye"></i><p>1.4k views</p></div>
                <div className='d-flex align-items-center justify-content-center share-icon'><i class="fa fa-share-alt" aria-hidden="true"></i> <p className='share my-auto mx-1'>Share</p></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card
