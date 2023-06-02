import {React,useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';


function LoginPage() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext)

  const [user,setUser] = useState({name:"",email:""})

  const handleSubmit=(e)=>{
    e.preventDefault();
    auth.login(user.name,user.email)
    navigate('/')
    // console.log("hi")
  }
  let id,value
  const handleChange=(e)=>{
    id = e.target.id
    value = e.target.value
    setUser({...user,[id]:value})
  }

  return (
    <>
    <section className="form-section gradient-custom">
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-white text-dark" style={{'borderRadius':"1rem"}}>
              <div className="card-body p-5 text-center">

                <form onSubmit={handleSubmit}>
                    <h2 className="fw-bold mb-1 text-uppercase">Login</h2>
                    <p className="text-dark-50 mb-5">Please enter your name and email!</p>
                    <div className="form-outline form-dark mb-3">
                      <input type="text" id="name" className="form-control form-control-lg" onChange={handleChange} value={user.name} required/>
                      <label className="form-label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-outline form-dark mb-3">
                      <input type="email" id="email" className="form-control form-control-lg" onChange={handleChange} value={user.email} required/>
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>
                    <p className="small mb-4 pb-lg-2"><a className="text-dark-50" href="#!">Forgot email?</a></p>
                    <button className="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>
                </form>

                <div className="d-flex justify-content-center text-center mt-4 mb-4 pt-1">
                    <a href="#!" className="text-dark"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-dark"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-dark"><i className="fab fa-google fa-lg"></i></a>
                </div>
                <div>
                  <p className="mb-0">Don't have an account? <a href="#!" className="text-dark-50 fw-bold">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default LoginPage
