import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieList from "../components/movieSearch/MovieList";
import { MovieContext } from "../store/movie-context";

function MovieCollectionScreen({navigation}){
  const [myCollection, setMycollection] = useState([]);
  const moviesCtx = useContext(MovieContext)
  
  const isFocused = useIsFocused();
  useEffect(()=>{
    function listMovies(){
      // const movies = await fetchMovies();
      // setMycollection(movies)
      setMycollection(moviesCtx.moviesInDb)
    }

    if (isFocused){
      listMovies()
    }
  }, [isFocused])

  function navigateTo(item){
    navigation.navigate(
      'MovieDetailsScreen',
      {
        film: {
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
    }

  return <MovieList onPress={navigateTo} movieResult={myCollection}/>
}

export default MovieCollectionScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  }
})