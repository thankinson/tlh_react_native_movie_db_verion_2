import { StyleSheet, View, Text } from "react-native";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";

function ButtonOptions({myCollection, addMovie, removeMovie, film, options, setOptions, data}){
  function checkDb(movie){
    return movie.movieId === film.movieId
  }

  if (myCollection.find(checkDb)) {
    return (
      <View style={styles.addRemoveContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>{film.format}</Text>
            <Button style={styles.addRemove} onPress={removeMovie} buttonColor={styles.buttonColor}>remove</Button>
        </View>
      </View>
      )
  } else {
    return (

      <View style={styles.addRemoveContainer}>
        <View style={styles.container}>
          <View style={styles.checkBoxContainer}>
            <CheckBox options={options} setOptions={setOptions} data={data} />
          </View>
          <Button style={styles.addRemove} onPress={addMovie} >add</Button>
        </View>
      </View>
    )
  }  
}

export default ButtonOptions;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonColor: {
    backgroundColor: 'red'
  },
  addRemove: {
    width: 150
  },
  text: {
    color: 'white',
    fontSize: 18,
    padding: 5
  },
  addRemoveContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    padding: 20
  }
})