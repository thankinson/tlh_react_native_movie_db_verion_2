import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalColors";

function FilmTitle({film}){
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{film.title}</Text>
    </View>
  )
}

export default FilmTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.text01
  },
  titleContainer:{
    alignItems: 'center',
  },
})