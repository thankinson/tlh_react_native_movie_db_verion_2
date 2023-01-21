import { Text, TextInput, View, StyleSheet } from "react-native";

function InputText({label, style, textInputConfig}){
  return (
    <View style={[styles.inputContainer, style]}>
      <Text>{label}</Text>
      <TextInput style={styles.input}  {...textInputConfig}/>
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
    padding: 6,
    borderRadius:6,
    fontSize: 18,
    backgroundColor: 'white'
  },
})