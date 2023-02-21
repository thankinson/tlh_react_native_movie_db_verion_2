import { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import MovieService  from '../store/MovieSearchService';
import MovieList from "../components/movieSearch/MovieList";
import InputText from "../components/movieSearch/InputText";
import Button from "../components/ui/Button";
import { MovieContext } from "../store/movie-context";

function MovieSearchScreen({navigation}){
  const [searchMovie, setMovieSearch] = useState('');
  const [movieResult, setMovieResult] = useState('');
  console.log(searchMovie)
  const movieCtx = useContext(MovieContext);

  function navigateTo(item){
    movieCtx.checkMovieInDb(item.id)
    navigation.navigate(
      'MovieDetailsScreen',
      {
        film: {
          movieId: item.id,
          title: item.original_title, 
          poster: item.poster_path,
          overview: item.overview
        }
      }
    )
  }

  async function searchMovieHandler(){  
    let searchFilm = new MovieService(searchMovie)
    const data = await searchFilm.searchMovie()
    setMovieResult(data)
  }
  
  function ListReturned(){
    if (!movieResult){
      return (
        <View style={styles.textContainer}>
          <Ionicons name="search" size={38} />
          <Text style={styles.texFindFilm}>Use search to find film</Text>
          <Ionicons name="search" size={38} />
        </View>
      )
    } else {
      return (
        <MovieList movieResult={movieResult} onPress={navigateTo}/>
        )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer} >
        <InputText 
          label='Movie Search'
          textInputConfig={{
            placeholder: 'Search....',
            onChangeText: setMovieSearch
          }}
        />
        <Button style={styles.button} onPress={searchMovieHandler} >Search</Button>
      </View>
      <View style={styles.listContainer}>
        <ListReturned />
      </View>
    </View>
  )
}

export default MovieSearchScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 6
  },
  listContainer: {
    flex: 1,
    // backgroundColor: 'red'
  },
  searchContainer: {
    height: 150,
    // backgroundColor: 'blue'
  },
  button:{
    marginTop: 10
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texFindFilm: {
    fontSize: 24,
    fontWeight: 'bold'
  },
})