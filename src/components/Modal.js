import React,{useEffect,useState} from 'react'
import ReactDOM  from 'react-dom';

function Modal({handleClick,changeisLogged}) {

    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "scroll";
    }
    }, [])

    const [clicked,setClicked] = useState(false)
    const handleFormSwitch=()=>{
        setClicked(!clicked)
    }
        
    const onSignClick=()=>{
        handleClick()
        changeisLogged()
    }

  return ReactDOM.createPortal(
    <>
    <div className='modal-wrapper'onClick={()=>handleClick()}></div>
    <div className='modal-container'>
    <button className='modal-close' onClick={()=>handleClick()}><i className='fa fa-times'></i></button>
    <div className='message d-flex align-items-center justify-content-center text-center'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
        <div className='row modal-content'>
            <div className='col-6 form-part'>   
                <h1 className='mb-3 create-account'>{clicked?"Sign In":"Create Account"}</h1>        
                <form>
                    {!clicked && <div className={`row g-0 ${clicked ? 'visible' : ''}`}>
                       <div className='col'>   
                            <input type='text' className='form-control modal-input modal-input rounded-0' id='firstName' placeholder='First Name'/>
                        </div>
                        <div className='col'>    
                            <input type='text' className='form-control modal-input rounded-0' id='lastName' placeholder='Last Name' />
                        </div>
                    </div>}
                    <div className=''>   
                        <input type='email' className='form-control modal-input rounded-0' id='email'  placeholder='Email' />
                    </div>
                    <div className=''>    
                        <input type='password' className='form-control modal-input rounded-0' id='password' placeholder='Password'/>
                    </div>
                    {!clicked && <div className=''>    
                        <input type='password' className='form-control modal-input rounded-0' id='confirmPassword' placeholder='Confirm Password' />
                    </div>}
                </form>
                <div className='d-flex align-items-center mt-3'>
                <button className="btn btn-primary w-100 " onClick={onSignClick}>{clicked?"Sign In":"Create Account"}</button>
                <div className='alreadyhave2 text-end'><a className='link2' onClick={handleFormSwitch}>{clicked?"or,Create Account":"or,Sign In"}</a> </div>
                </div>
                <button className="btn btn-outline-primary w-100 first"><img src='https://res.cloudinary.com/dayc0s1py/image/upload/v1684234389/Images/f_logo_RGB-Blue_1024_rhcoxx.png'/> <span className='direct-sign'>Sign {clicked?"in":"up"} with Facebook</span></button>
                <button className="btn btn-outline-primary w-100"> <img src="https://res.cloudinary.com/dayc0s1py/image/upload/v1684234392/Images/search_gzyszd.png"/><span className='direct-sign'> Sign {clicked?"in":"up"} with Google </span></button>
                {clicked&&<div className='forgot-password'><a>Forgot Password</a></div>}
                {!clicked&&<div className='forgot-password termsandcondition'><a>By signing up, you agree to our Terms & conditions, Privacy policy</a></div>}
            </div>
            <div className='col-6 image-part'>
            <p className='mb-3 alreadyhave text-end'>{clicked?"Don’t have an account yet?":"Already have an account?"}<a className='link2' onClick={handleFormSwitch}>{clicked?"Create new for free!":"Sign In"}</a> </p>
            <img src='https://res.cloudinary.com/dayc0s1py/image/upload/v1684234389/Images/Group_3_awqmal.png' alt='your-image-description' />
            <p className='text-center terms-cond'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
        </div>
    </div>
    </>,
    document.querySelector('.myModalDiv')
  )
}

export default Modal
