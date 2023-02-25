import { StyleSheet } from "react-native";
import Button from "../ui/Button";

function ButtonOptions({myCollection, addMovie, removeMovie, film}){
  function checkDb(movie){
    return movie.movieId === film.movieId
  }

  if (myCollection.find(checkDb)) {
    return <Button style={styles.addRemove} onPress={removeMovie} buttonColor={styles.buttonColor}>remove</Button>
  } else {
    return <Button style={styles.addRemove} onPress={addMovie} >add</Button>
  }  
}

export default ButtonOptions;

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: 'red'
  },
  addRemove: {
    width: 150
  },
})