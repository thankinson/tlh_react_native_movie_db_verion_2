import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({children, onPress, style, buttonColor}){

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}
      >
        <View style={[styles.button, buttonColor]}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'green',
    elevation: 4
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
})