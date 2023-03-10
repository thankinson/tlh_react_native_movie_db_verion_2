import { Image, StyleSheet } from "react-native";
function Poster({poster}){
      
  return <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w300${poster}`}} />
}

export default Poster;

const styles = StyleSheet.create({
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
  }
})