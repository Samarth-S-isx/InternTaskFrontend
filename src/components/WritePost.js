import React,{useState} from 'react'





function WritePost({isFixed,showModal,isLogged,changeisLogged}) {
    const [selectedOption, setSelectedOption] = useState(1);
    const [joined,setJoined] = useState(false)

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    }
    const handleGroupClick = ()=>{
      if(!isLogged){
        setJoined(!joined)
      }else{
        setJoined(!joined)
      }
    }
  return (
    <>
      <div className={`container write-post ${isFixed ? 'fixed' : ''} ${showModal ? 'showModal' : ''}`}>
      <div className="row">
        <div className="col-6 firstpart">
          <div className=" d-flex justify-content options">
            <div className="postbutton"> <button type="button"className={`btn p-0 m-0 btn-bottom  ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => handleOptionClick(1)} >All Posts(32)</button></div>
            <div className="button"><button type="button"className={`btn p-0 m-0 btn-bottom  ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => handleOptionClick(2)}>Article</button></div>
            <div className="button"><button type="button"className={`btn p-0 m-0 btn-bottom  ${selectedOption === 3 ? 'selected' : ''}`} onClick={() => handleOptionClick(3)}>Event</button></div>
            <div className="button"><button type="button"className={`btn p-0 m-0 btn-bottom  ${selectedOption === 4 ? 'selected' : ''}`} onClick={() => handleOptionClick(4)}>Education</button></div>
            <div className="button"><button type="button"className={`btn p-0 m-0 btn-bottom  ${selectedOption === 4 ? 'selected' : ''}`} onClick={() => handleOptionClick(4)}>Jobs</button></div>
              
            <div className="dropdown filter">
                <button className="dropdown-button filter-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter All
                </button>
                <ul className="dropdown-menu dropdown-menu-filter dropdown-menu-end">
                  <li><button className="dropdown-item" type="button">Article</button></li>
                  <li><button className="dropdown-item" type="button">Event</button></li>
                  <li><button className="dropdown-item" type="button">Education</button></li>
                  <li><button className="dropdown-item" type="button">Jobs</button></li>
                </ul>
            </div>

          </div>
        </div>
        <div className="col-6 d-flex justify-content-end secondpart">
            <div className="button"><button type="button" className="btn bt-first end-button">Write a Post <i className="fa fa-caret-down"style={{ marginLeft: '10px' }}></i></button></div>
            {!joined && <div className="button"><button type="button" className="btn btn-end end-button" onClick={handleGroupClick}><i className="fa fa-user-plus"></i><span style={{ marginLeft: '6px' }}>Join Group</span> </button></div>}
            {joined&& <div className="button"><button type="button" className="btn end-button-leave" onClick={handleGroupClick}><i className="fa fa-sign-out"></i><span style={{ marginLeft: '6px'}}>Leave Group</span> </button></div>}
        </div>
      </div>
  </div>
    </>
  )
}

export default WritePost
