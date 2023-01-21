import { Image, Text, View } from "react-native";

function MovieDetailsScreen({route}){
  const { film } = route.params;

  return (
    <View>
      <Image source={{uri: `https://image.tmdb.org/t/p/w300${film.poster}`}} />
      <Text>{film.title}</Text>
      <Text>{film.overview}</Text>
    </View>
  )
}

export default MovieDetailsScreen;