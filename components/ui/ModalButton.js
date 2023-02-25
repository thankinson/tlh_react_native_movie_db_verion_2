import { StyleSheet, Text } from "react-native";

function ModalButton({children, onPress}){
  return (

      <Text onPress={onPress} style={styles.text} >
          {children} 
      </Text>
  )
};

export default ModalButton;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontStyle: 'italic',
    underline: {textDecorationLine: 'underline'}
  }
})