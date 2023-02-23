import { Pressable, StyleSheet, Text, View } from "react-native";

function ListButton({children, onPress, style, item}){

  return (
    <View style={style}>
      <Pressable
        onPress={()=>onPress(item)}
        style={({pressed}) => pressed && styles.pressed}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ListButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#262640',
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