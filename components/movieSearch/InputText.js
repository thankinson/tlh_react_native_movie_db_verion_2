import { Text, TextInput, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalColors";

function InputText({label, style, textInputConfig}){
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.text}>{label}</Text>
      <TextInput 
        style={styles.input}  
        {...textInputConfig}/>
    </View>
  )
}

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    marginBottom: 4
  },
  input: {
    padding: 10,
    borderRadius:6,
    fontSize: 18,
    // borderColor: GlobalStyles.colors.text01,
    borderWidth: 0.5,
  },
  // text styling
  text: {
    margin: 6,
    color: 'white'
  }
})