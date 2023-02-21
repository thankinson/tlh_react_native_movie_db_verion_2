import { createContext, useEffect, useReducer, useState } from "react";
import { fetchMovies, storeMovie } from "../utils/http";

export const MovieContext = createContext({
  movies: [],
  addMovie: ({title, about, poster}) => {},
  setMovie: (movies) => {},
  deleteMovie: (id) => {}
});

async function movieReducer(state, action){
  switch(action.type){
    case 'ADD':
      await storeMovie(action.payload)
      return [action.payload, ...state];
    case 'SET':
      return inverted = action.payload.reverse();
    case 'DELETE':
      return state.filter((movies) => movies.id != action.payload);
    default:
      return state;
  }
};

function MovieContextProvider({children}){
  const [movieState, dispatch] = useReducer(movieReducer, []);
  const [moviesInDb, setMoviesInDb] = useState([])
  const [inDb, setInDb] = useState()

  useEffect(()=> {
    async function listMovies(){
      const movies = await fetchMovies()
      setMoviesInDb(movies)
    }
    listMovies()
  }, [addMovie, deleteMovie])
  
  function checkMovieInDb(movieData){
    const checkMovie = moviesInDb.find((movie)=> movie.movieId === movieData.id)
    if (!checkMovie){
      setInDb(false)
      return;
    }
    setInDb(true)
  }

  function addMovie(movieData){
    dispatch({type: 'ADD', payload: movieData})
  };

  function setMovie(id){
    dispatch({type: 'SET', payload: id})
  };

  function deleteMovie(id){
    dispatch({type: 'DELETE', payload: id})
  };

  const value = {
    movies: movieState,
    moviesInDb: moviesInDb,
    inDb: inDb,
    checkMovieInDb: checkMovieInDb,
    addMovie: addMovie,
    setMovie: setMovie,
    deleteMovie: deleteMovie
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
};

export default MovieContextProvider;