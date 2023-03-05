import axios from "axios"
import {API_DB} from "@env"

export async function storeMovie(movieData){
  try {
    const response = await axios.post(`${API_DB}/mymovies.json`, movieData);
    const id = response.data.name;
    return id;
  } catch (error) {
    console.log('ERROR: failed too add movie: ', error)
  }    
};

export async function fetchMovies(){
  try {
    const response = await axios.get(`${API_DB}/mymovies.json`);
    const myMovies = [];
    for (const key in response.data){
      const movieObj = {
        id: key,
        movieId: response.data[key].movieId,
        title: response.data[key].title,
        about: response.data[key].about,
        poster: response.data[key].poster,
        format: response.data[key].format
      };
      myMovies.push(movieObj);
    };
    return myMovies;
  } catch (error) {
    console.log('ERROR: Failed to load database', error);
  };
};

export function deleteMovie(id){
  try {
    return axios.delete(`${API_DB}/mymovies/${id}.json`)
  } catch (error) {
    console.log('ERROR: Failed to delete from database: ', error)
  };
};