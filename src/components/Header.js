import {React,useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'

function Header() {
  const auth = useContext(AuthContext)
  const handleClick=()=>{
    auth.logout()
  }

  return (
    <>
    <nav className="navbar  navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className='navbar-brand' to="/">Home</Link>
            <form className="d-flex">
            {auth.isLoggedIn &&<Link className='navbar-brand' to="/auth" onClick={handleClick}>Logout</Link>}
            {!auth.isLoggedIn &&<Link className='navbar-brand' to="/auth">Login</Link>}
            </form>
        </div>
    </nav>
    </>
  )
}

export default Header
