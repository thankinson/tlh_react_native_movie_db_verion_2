import { createContext, useEffect, useReducer, useState } from "react";
import { deleteMovie, fetchMovies, storeMovie } from "../utils/http";

export const MovieContext = createContext({
  movies: [],
  addMovie: ({title, about, poster, movieId, format}) => {},
  setMovie: (movies) => {},
  deleteMovie: (id) => {}
});

async function movieReducer(state, action){
  switch(action.type){
    case 'ADD':
      // await storeMovie(action.payload)
      // return [action.payload];
      return await storeMovie(action.payload)
    case 'DELETE':
      // return state.filter((movies) => movies.id != action.payload);
      return await deleteMovie(action.payload)
    default:
      return state;
  }
};

function MovieContextProvider({children}){
  const [movieState, dispatch] = useReducer(movieReducer, []);
  const [moviesInDb, setMoviesInDb] = useState([])
  
  useEffect(()=> {
    async function listMovies(){
      const movies = await fetchMovies()
      setMoviesInDb(movies)
    }
    listMovies()
  }, [addMovie, deleteMovie])
  
  function addMovie(movieData){
    // await storeMovie(movieData)
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