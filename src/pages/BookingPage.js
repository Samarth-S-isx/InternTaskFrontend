import {React,useContext,useEffect,useState} from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/auth-context';
import './BookingPage.css'

function BookingPage({movies}) {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const id = parseInt(useParams().id);
    const [movie,setMovie]=useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        if(!auth.isLoggedIn){
            navigate('/auth')
        }
      const getalldata = async()=>{
        const URL="https://api.tvmaze.com/search/shows?q=all"
        const response= await fetch(URL)
        const result = await response.json()
        getmovie(result)
        setIsLoading(false)
      }
      getalldata()

    }, [])
    
    const getmovie=(data)=>{
      const filteredMovies = data.filter((movie) => movie.show.id === id); 
      setMovie(filteredMovies[0].show)
    }

    const handleChange=()=>{

    }
    
  return (
    <>
    {!isLoading && <div className="container booking-container d-lg-flex">
        <div className="box-1 bg-light user">
            <div className="box-inner-1 pb-3 mb-3 ">
                <div className="d-flex justify-content-between mb-3 userdetails">
                    <p className="fw-bold">Movie Tickets</p>
                    <p className="fw-lighter"><span className="fas fa-inr">199</span></p>
                </div>
                <div className='w-100 d-flex justify-content-center'>
                    <h5 className='movie-name'>{movie.name}</h5>
                </div>
                <div className='img'>
                    <img src={movie.image.medium}></img>
                </div>
            </div>
        </div>
        <div className="box-2">
            <div className="box-inner-2">
                <div>
                    <p className="fw-bold">Payment Details</p>
                    <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                </div>
                <form action="">
                    <div className="mb-3">
                        <p className="dis fw-bold mb-2">Email address</p>
                        <input className="form-control" type="email" value={auth.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <p className="dis fw-bold mb-2">Card details</p>
                        <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                            <div className="fab fa-cc-visa ps-3"></div>
                            <input type="text" className="form-control" placeholder="Card Details"/>
                            <div className="d-flex w-50">
                                <input type="text" className="form-control px-0" placeholder="MM/YY" autoComplete='off'/>
                                <input type="password" maxLength="3" className="form-control px-0" placeholder="CVV"  autoComplete='off'/>
                            </div>
                        </div>
                        <div className="my-3 cardname">
                            <p className="dis fw-bold mb-2">Cardholder name</p>
                            <input className="form-control" type="text" value={auth.name} onChange={handleChange}/>
                        </div>
                        <div className="address">
                            <p className="dis fw-bold mb-3">Billing address</p>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue={"India"} hidden>India</option>
                                <option value="1">USA</option>
                                <option value="2">Australia</option>
                                <option value="3">Canada</option>
                            </select>
                            <div className="d-flex">
                                <input className="form-control zip" type="text" placeholder="ZIP"/>
                                <input className="form-control state" type="text" placeholder="State"/>
                            </div>

                            <div className="d-flex flex-column dis mt-5">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p>Subtotal</p>
                                    <p><span className="fas fa-inr"></span>199.00</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p>VAT<span>(20%)</span></p>
                                    <p><span className="fas fa-inr"></span>5.80</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p className="fw-bold">Total</p>
                                    <p className="fw-bold"><span className="fas fa-inr"></span>214.80</p>
                                </div>
                                <div className="btn btn-primary mt-2">Pay<span className="fas fa-inr px-1"></span>214.80
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>}
    </>
  )
}

export default BookingPage
