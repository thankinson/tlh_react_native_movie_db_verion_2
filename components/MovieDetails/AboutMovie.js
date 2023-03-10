import { StyleSheet, Text } from "react-native";
import ModalButton from "../ui/ModalButton";
import { GlobalStyles } from "../../constants/GlobalColors";

function AboutMovie({film, onPress}){
  return (
    <>
    <Text style={styles.subTitle}>About</Text>
    <Text style={styles.text}>{film.overview.substr(0, 30)}... <ModalButton onPress={onPress} >read more</ModalButton></Text>
    </>
  )
}

export default AboutMovie;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: GlobalStyles.colors.text01
  },
  text: {
    color: GlobalStyles.colors.text01

  }
})