import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import MovieService  from '../store/MovieSearchService';
import MovieList from "../components/movieSearch/MovieList";
import InputText from "../components/movieSearch/InputText";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/GlobalColors";

function MovieSearchScreen({navigation}){
  const [searchMovie, setMovieSearch] = useState('');
  const [movieResult, setMovieResult] = useState('');

  function navigateTo(item){
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
          <Ionicons 
            name="search" 
            size={128} 
            color={GlobalStyles.colors.text01}/>
          <Text style={styles.texFindFilm}>Use search bar to find film</Text>
        </View>
      )
    } else {
      return (
        <MovieList movieResult={movieResult} onPress={navigateTo}/>
        )
    }
  }

  return (
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <View style={styles.searchContainer} >
        <InputText 
          label='Movie Search'
          textInputConfig={{
            placeholder: 'Search here....',
            placeholderTextColor: GlobalStyles.colors.text01,
            borderColor: GlobalStyles.colors.text01,
            color: GlobalStyles.colors.text01,
            onChangeText: setMovieSearch
          }}
        />
        <Button style={styles.button} onPress={searchMovieHandler} >Search</Button>
      </View>
      <View style={styles.listContainer}>
        <ListReturned />
      </View>
    </View>
    </View>
  )
}

export default MovieSearchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary10
  },
  container:{
    flex: 1,
    margin: 6
  },
  listContainer: {
    flex: 1,
  },
  searchContainer: {
    height: 150,
  },
  button:{
    marginTop: 10
  },
  textContainer: {
    marginTop: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texFindFilm: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.text01
  },
})