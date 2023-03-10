import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { MovieContext } from "../../store/movie-context";
import { GlobalStyles } from "../../constants/GlobalColors";

import MovieDetailHeader from "./MovieDetailHeader";
import Poster from "./Poster";
import AboutMovie from "./AboutMovie";
import MovieDescriptionModal from "./DescriptionModal";
import FilmTitle from "./FilmTitle";
import ButtonOptions from "./ButtonOptions";

// ###################################################################
//
//      this page is not curently active and is a work in progress. 
//      Currently in this version the Format choices dont fit correctly in there div.
//      this will be worked on
//
// ###################################################################

function MovieDetailsForm({ navigation, closePressHandler, film}){

  const [movieDetails, setMovieDetails] = useState()
  const [myCollection, setMycollection] = useState([]);
  const [options, setOptions] = useState()

  const data = [{ value: 'DVD'}, {value: 'Blu-Ray'}, {value: '4k'}]
  
  const movieCtx = useContext(MovieContext);
  const [isVisable, setIsVisable] = useState(false)

  useEffect(()=>{
    
    function setFilm(){
      const movieData = {
        title: film.title,
        about: film.overview,
        poster: film.poster,
        movieId: film.movieId
      }
      setMovieDetails(movieData)
    }
    if (film){
      setFilm()
    }
  }, [])

  useEffect(()=>{
    async function listMovies(){
      const movies = movieCtx.moviesInDb
      setMycollection(movies)
    }
    listMovies()
  }, [])

  function addMovieHandler(){
    try {
      if (!options){
        Alert.alert('Check Format', 'Please select format: DvD/Blu-Ray/4k', 
        [{ text: 'Close', style: 'cancel' }])
        return;
      }
      movieCtx.addMovie({...movieDetails, format: options}) 
      closePressHandler()
    } catch (error) {
      console.log(error)
    }
  };

  function removeMovie(){
    movieCtx.deleteMovie(film.id)
    closePressHandler()
  }
  function removeMovieHandler(){
    Alert.alert('Remove Movie', 'Please Confirm', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'Remove movie', onPress: () => removeMovie()},
    ]);
  };

  function onShowModal(){
    setIsVisable(true)
  }

  return (
    <View style={styles.container}>
      <MovieDetailHeader onPress={closePressHandler} />
 
      <FilmTitle film={film} />

      <Poster poster={film.poster}/>

      <AboutMovie film={film} onPress={onShowModal}/>

      <MovieDescriptionModal 
        film={film} 
        setIsVisable={setIsVisable}
        isVisable={isVisable}
        />

      <ButtonOptions
          options={options} 
          setOptions={setOptions}
          data={data}
          myCollection={myCollection} 
          film={film}
          removeMovie={removeMovieHandler} 
          addMovie={addMovieHandler}/>
          
      </View>

  )
}

export default MovieDetailsForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
    backgroundColor: GlobalStyles.colors.primary10
  }
})