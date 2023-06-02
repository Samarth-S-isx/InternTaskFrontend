import React, { useState ,useCallback,useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MovieDescription from './pages/MovieDescription';
import BookingPage from './pages/BookingPage';
import { AuthContext } from './context/auth-context';

import './App.css'

function App() {

  const [movies,setMovies]=useState([])
  const setState=(result)=>{
    setMovies(result)
  }
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("")

  const login = useCallback((name,email)=>{

    const user = {name,email}
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true)
    setEmail(email)
    setName(name)
  },[])

  useEffect(() => {
    if(localStorage.getItem('user')){
      setIsLoggedIn(true)
      setEmail('some')
      setName('some')
    }
  }, [])
  
  const logout = useCallback(()=>{
    localStorage.removeItem('user');
    setIsLoggedIn(false)
    setName(null)
    setEmail(null)
  },[])


  return (
    <AuthContext.Provider value = {{isLoggedIn:isLoggedIn,login:login,logout:logout,name:name,email:email}}>
      <div className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage setState={setState} />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
            <Route path="/bookshow/:id" element={<BookingPage movies={movies} />} />
          </Routes>
        </Router>
    </div>
   </AuthContext.Provider>
  );
}

export default App;
