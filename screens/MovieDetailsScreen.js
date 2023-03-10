import MovieDetailsForm from "../components/MovieDetails/MovieDetailesForm";

function MovieDetailsScreen({route, navigation}){
  const { film } = route.params;
  function closePressHandler(){
    navigation.goBack();
  }

 return <MovieDetailsForm film={film} closePressHandler={closePressHandler} />
}

export default MovieDetailsScreen;