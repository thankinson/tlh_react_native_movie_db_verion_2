import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ModalButton from "../components/ui/ModalButton";
import MovieDescriptionModal from "../components/MovieDetails/DescriptionModal";
import ButtonOptions from "../components/MovieDetails/ButtonOptions";

import { MovieContext } from "../store/movie-context";
import { GlobalStyles } from "../constants/GlobalColors";

function MovieDetailsScreen({route, navigation}){
  const { film } = route.params;
  const [movieDetails, setMovieDetails] = useState()
  const [myCollection, setMycollection] = useState([]);
  
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
      movieCtx.addMovie(movieDetails)
      navigation.goBack();  
    } catch (error) {
      console.log(error)
    }
  }

  function removeMovieHandler(){
    movieCtx.deleteMovie(film.id)
    navigation.goBack();
  }

  function onShowModal(){
    setIsVisable(true)
  }

  function closePressHandler(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>{film.title}</Text>
      </View>
      <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w300${film.poster}`}} />
      <Text style={styles.subTitle}>Synopsis</Text>
      <Text style={styles.text}>{film.overview.substr(0, 30)}... <ModalButton onPress={onShowModal} >read more</ModalButton></Text>
        <MovieDescriptionModal 
          film={film} 
          setIsVisable={setIsVisable}
          isVisable={isVisable}
          />
      <View style={styles.addRemoveContainer}>
        <ButtonOptions 
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
  image:{
    width: 300,
    minHeight: '60%',
    marginTop: 20,
    elevation: 5,
    marginBottom: 10,
    elevation: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.text01
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: GlobalStyles.colors.text01
  },
  text: {
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
  }

})