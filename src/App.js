import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


import './App.css';

function App() {

 const [isLogged,setisLogged] = useState(false)
 const changeisLogged = ()=>{
  setisLogged(!isLogged)
 }
 const [showModal,setShowModal] = useState(false)

  const handleClick=()=>{
    setShowModal(!showModal)
  }
  return (
    <div className="App">
      <Navbar changeisLogged={changeisLogged} isLogged={isLogged} showModal={showModal} handleClick={handleClick}></Navbar>
      <HomePage changeisLogged={changeisLogged} isLogged={isLogged} showModal={showModal} handleClick={handleClick}></HomePage>
   </div>
  );
}

export default App;
