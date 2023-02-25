import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieList from "../components/movieSearch/MovieList";
import { MovieContext } from "../store/movie-context";
import { GlobalStyles } from "../constants/GlobalColors";
function MovieCollectionScreen({navigation}){
  const [myCollection, setMycollection] = useState([]);
  const moviesCtx = useContext(MovieContext)
  
  const isFocused = useIsFocused();
  useEffect(()=>{
    function listMovies(){
      const movieData = moviesCtx.moviesInDb
      setMycollection(movieData)
    }

    if (isFocused){
      listMovies()
    }
  }, [isFocused, moviesCtx.deleteMovie])

  function navigateTo(item){
    navigation.navigate(
      'MovieDetailsScreen',
      {
        film: {
          id: item.id,
          movieId: item.movieId,
          title: item.title, 
          poster: item.poster,
          overview: item.about
        }
      }
    )
  }

  if (!myCollection){
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Loading Movie collection...</Text>
      </View>
      )
    };

  return (
    <View style={styles.container}>
      <MovieList onPress={navigateTo}  movieResult={myCollection}/>
    </View>
    )
}

export default MovieCollectionScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary10
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary10,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  }
})