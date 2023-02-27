
import { Pressable, StyleSheet, View } from "react-native";

function CheckBox(){
  return (
    <Pressable>
        <View style={styles.button} ></View>
    </Pressable>
  )
}

export default CheckBox;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row'
  },
  button: {
    width: '50px',
    height: '50px',
    borderWidth: 0.5,
    borderColor: 'white'
  }
})