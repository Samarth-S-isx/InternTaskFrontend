import {React,useEffect, useState} from 'react'

import MovieCard from '../components/MovieCard'


function HomePage({setState}) {


    const [movies,setMovies]=useState([])

    useEffect(() => {
      const getalldata = async()=>{
        const URL="https://api.tvmaze.com/search/shows?q=all"
        const response= await fetch(URL)
        const result = await response.json()
        setMovies(result)
        setState(result)
      }
      getalldata()

    }, [])
    

  return (
    <>
    <section className='new-movie'>
        <div className='container'>
            <div className='row'>
                {movies.map(movie=>(<MovieCard key={movie.show.id} data={movie.show}></MovieCard>))}
            </div>
        </div>
    </section>

    </>
  )
}

export default HomePage