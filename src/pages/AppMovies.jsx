import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoviesService from '../services/movies.service';
import { movieSelector } from '../store/movie/selectors';
import { setMovie } from '../store/movie/slice';


export default function AppMovies() {

    const dispatch = useDispatch();
    const movies = useSelector(movieSelector);
    

   useEffect(()=>{
    const fetchData = async() => {
      try {
        const data = await MoviesService.getAllMovies();
        dispatch(setMovie(data))
      } catch(e) {
        console.log(e)
      }
    } 
    fetchData();
   },[])

  return (
    <div>
    <h1>Movies</h1>
    <ul>
        {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
        ))}
    </ul>
</div>
  )
}
