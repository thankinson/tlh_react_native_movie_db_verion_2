import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieList from "../components/movieSearch/MovieList";
import { getAllMovies } from "../utils/database";

function MovieCollectionScreen(){
  const [myCollection, setMycollection] = useState();

  const isFocused = useIsFocused();
  useEffect(()=>{
    async function listMovies(){
      const movies = await getAllMovies();
      setMycollection(movies)
    }

    if (isFocused){
      listMovies()
    }
  }, [isFocused])

  if (!myCollection){
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Loading Movie collection...</Text>
      </View>
      )
    }

  return <MovieList movieResult={myCollection}/>
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