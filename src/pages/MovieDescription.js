import React from 'react'
import { Link, useParams} from 'react-router-dom'


function MovieDescription({movies}) {
    const id = parseInt(useParams().id) ;
    const filteredMovies = movies.filter((movie) => movie.show.id === id);
    const movie = filteredMovies[0].show;
    // console.log(movie)
    const timing = movie.schedule.days.map((day)=>  <li className='time' key={day}>{day} {movie.schedule.time}</li> )
  return (
    <div className="detail-page">
        <div className=' row content d-flex justify-content-center align-item-center'>
            <div className='col-md-6 d-flex justify-content-center img-colum'>
              <img src={movie.image.original} alt='someimg'></img>
            </div> 

            <div className='col-md-6 d-flex flex-column detail-colum'>
              <div className='d-flex align-item-center justify-content-between mb-3'>
                  <div className='d-flex align-items-end'>
                    <h1>{movie.name}</h1>
                  </div>
                  <div className='my-0 d-flex align-items-center'>
                    <h5>Status <span className='value'>{movie.status}</span>  </h5>
                  </div>
                  <div className='my-0 d-flex align-items-center'>
                    <h5>Language <span className='value'>{movie.language}</span></h5>
                  </div>
              </div>

              <div className='d-flex align-item-center justify-content-between genre-rating mb-3'>
                  <div className=' d-flex'>
                    {movie.genres.map((g)=><h5 className='genre' key={g}>{g}</h5>)}
                  </div>
                  <div className=' d-flex rating'>
                    <h5>Rating <span className='value'>{movie.rating.average ? movie.rating.average : "--"}/10 </span></h5>
                  </div>
              </div>
              
              <h5>About The Movie</h5>
              <p>{movie.summary}</p>
              <div className='mt-4'>
                <h5>Timings</h5>
                <ul className='timing'>
                  {timing}
                </ul>
              </div>
              <div className='d-flex justify-content-center button'>
                  <Link to={`/bookshow/${id}`} className='btn btn-outline-dark'>Book Show</Link>
                {/* <button type="button" className="btn btn-outline-dark">Book Show</button> */}
              </div>
          </div>
        </div>
    </div>
  )
}

export default MovieDescription
