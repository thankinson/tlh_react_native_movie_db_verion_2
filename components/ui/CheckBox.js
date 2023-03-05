import { StyleSheet, View, Pressable, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalColors";

function CheckBox({data, setOptions, options}){

  return (
    <>
    {data.map((item)=> <View key={item.value} style={styles.container}>
    <Pressable style={styles.checkBoxContanier} onPress={()=> setOptions(item.value)}>
        <View style={styles.checkBoxInner}>
            <View style={ item.value === options ? styles.checkBoxCenterColour : styles.checkBoxCenter}></View>
        </View>
    </Pressable>
    <Text style={styles.textColor}>{item.value}</Text>
    </View>
    )}
    </>
  )
}

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.75
  },
  checkBoxContanier:{
    flex: 1,
    paddingBottom: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxInner:{
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.text01,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxCenter: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.text01,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxCenterColour: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'green',
    elevation: 4,
  },
  textColor: {
    color: GlobalStyles.colors.text01
  },
})