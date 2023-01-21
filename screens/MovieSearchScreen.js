import { useState } from "react";
import {  StyleSheet, View } from "react-native";

import MovieService  from '../store/MovieSearchService';
import MovieList from "../components/movieSearch/MovieList";
import InputText from "../components/movieSearch/InputText";
import Button from "../components/ui/Button";
function MovieSearchScreen({navigation}){
  const [searchMovie, setMovieSearch] = useState('');
  const [movieResult, setMovieResult] = useState('');
  console.log(searchMovie)

  function navigateTo(item){
    navigation.navigate(
      'MovieDetailsScreen',
      {
        film: {
          id: item.id,
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
        <MovieList 
          movieResult={movieResult}
          onPress={navigateTo}
          />
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
    flex: 1
  },
  searchContainer: {
    flex: 1,
  },
  button:{
  
    marginTop: 10
  }
})