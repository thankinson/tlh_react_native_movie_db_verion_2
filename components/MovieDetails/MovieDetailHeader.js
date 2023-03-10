import { StyleSheet, View } from "react-native";

import Button from "../ui/Button";

function MovieDetailHeader({onPress}){

  return (
      <View style={styles.headerContainer}>
        <Button onPress={onPress}>Go back</Button>
      </View>
  )
}

export default MovieDetailHeader;

const styles = StyleSheet.create({
  headerContainer:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
})