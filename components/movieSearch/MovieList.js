import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Button from "../ui/Button";

function MovieList({movieResult, onPress}){

  function MovieFound(){
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
        <>
        <FlatList 
          data={movieResult}
          renderItem={(item)=>
            <Button 
              item={item}
              onPress={onPress}>
                {item.original_title}
            </Button>
            // <Text> {item.original_title}</Text>
            }
          keyExtractor={item => item.id}
        />
        </>
        )
    }
  }
  return (
    <>
      <MovieFound />
    </>
  )
}

export default MovieList;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texFindFilm: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})