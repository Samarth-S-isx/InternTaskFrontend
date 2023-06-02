import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({imgsrc,data}) {
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 movie">
            <div className="item-slide">
                <div className="box-img">
                    <img src={data.image.medium} alt="dasdas" />
                    <div className="text-wrap">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <h4>{data.name}</h4>
                        </div>
                        <div>
                          <h5>{data.rating.average ? data.rating.average : "--"}/10</h5>
                        </div>
                      </div>
                        {/* <h4>{name} <span className="movie-lang">{lang}</span></h4> */}
                        <div className="desc">
                        <h4>Genres</h4>
                        <span>{data.genres}</span>
                        </div>
                        <div className="book-now-c">
                          <Link to={`/movie/${data.id}`}>Show Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default MovieCard
