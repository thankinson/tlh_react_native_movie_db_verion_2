import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // imports the Ionicans libray of useable images.

import { MovieContext } from "../store/movie-context";
import { GlobalStyles } from "../constants/GlobalColors";
import Button from "../components/ui/Button";
import Poster from "./Poster";
import AboutMovie from "./AboutMovie";
import MovieDescriptionModal from "./DescriptionModal";
import ButtonOptions from "../components/MovieDetails/ButtonOptions";
// ###################################################################
//
//      this page is not curently active and is a work in progress. 
//      this form is curently being broken down into componants.
function MovieDetailsScreen({route, navigation}){
  const { film } = route.params;

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
      navigation.goBack();  
    } catch (error) {
      console.log(error)
    }
  };

  function removeMovie(){
    movieCtx.deleteMovie(film.id)
    navigation.goBack();
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

  function closePressHandler(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button onPress={closePressHandler}><Ionicons name="arrow-back-sharp" size={12} color="black" />Go back</Button>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.title}>{film.title}</Text>
      </View>

      <Poster poster={film.poster}/>
      <AboutMovie film={film} onPress={onShowModal}/>

      <MovieDescriptionModal 
        film={film} 
        setIsVisable={setIsVisable}
        isVisable={isVisable}
        />

      <View style={styles.addRemoveContainer}>
        <ButtonOptions
          options={options} 
          setOptions={setOptions}
          data={data}
          myCollection={myCollection} 
          film={film}
          removeMovie={removeMovieHandler} 
          addMovie={addMovieHandler}/>
      </View>

    </View>
  )
}

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
    backgroundColor: GlobalStyles.colors.primary10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.text01
  },
  buttonContainer:{
    alignItems: 'center',
  },
  button: {
    width: 300,
    marginBottom: 10
  },
  addRemoveContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    padding: 20
  },
  headerContainer:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }

})