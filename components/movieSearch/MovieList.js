import { FlatList, StyleSheet } from "react-native";

import ListButton from "./ListButton";

function MovieList({movieResult, onPress}){
      
      return (  
        <FlatList 
          // contentContainerStyle={styles.listContainer}
          data={movieResult}
          renderItem={({item})=>
            <ListButton 
              style={styles.button}
              item={item}
              onPress={onPress}
              >
                {item.original_title ? item.original_title : item.title }
            </ListButton>
          
            }
          keyExtractor={item => item.id}
        />
        
        )
}

export default MovieList;

const styles = StyleSheet.create({
  listContainer:{
    flexGrow: 1
  },
  button:{
    margin: 5
  }
})
