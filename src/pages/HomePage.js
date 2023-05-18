import React ,{useState,useEffect}from 'react'
import Card from '../components/Card'
import WritePost from '../components/WritePost'
import Location from '../components/Location'

function HomePage({showModal,handleClick,isLogged,changeisLogged}) {

  const [isFixed,setisFixed]  = useState(false)
  const [joined,setJoined] = useState(false)
  const data = [
    
  ]

  const handleGroupClick = ()=>{
    if(!isLogged){
      handleClick()
      setJoined(!joined)
    }else{
      setJoined(!joined)
      changeisLogged()
    }
  }

  useEffect(() => {
    const handleScroll = () => {    
      const elementAboveBox = document.querySelector('.top-img-box');
      const elementAboveBoxBottom = elementAboveBox.getBoundingClientRect().bottom;
      if (elementAboveBoxBottom <= 72) {
        setisFixed(true);
      } else {
        setisFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
    <div className='top-img-box'>
      <img src="https://res.cloudinary.com/dayc0s1py/image/upload/v1684234390/Images/Rectangle_2_bjz9gs.png"></img>
      <button className='join-group' onClick={handleGroupClick}> {joined?"Leave Group":"Join Group"}</button>
      <span id='span1'>Computer Engineering</span>
      <span id='span2'>142,765 Computer Engineers follow this</span>
    </div>
    <div className='pagemain'>
      <WritePost showModal={showModal} isFixed={isFixed} isLogged={isLogged} changeisLogged={changeisLogged}></WritePost>
      <div className='d-flex'>
      <div className={`card-box ${isFixed ? 'fixed' : ''}`}>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Location isFixed={isFixed} isLogged={isLogged}></Location>
      </div>
      {isLogged&&<div class="circle">
      <i class="fa fa-pencil" aria-hidden="true"></i>
      </div>}
    </div>
    </>
  )
}

export default HomePage
