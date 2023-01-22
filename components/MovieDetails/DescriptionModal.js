import { Modal, Text, Alert, View, StyleSheet } from "react-native";

function MovieDescriptionModal({film, setIsVisable, isVisable}){
  return (
    <View >
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisable}
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.');
      //   setIsVisable(!isVisable)}}
    >
      <View style={styles.modalConatiner}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>{film.title}</Text>
            <Text style={styles.subTitle}>Synopsis</Text>
            <Text>{film.overview}</Text>
          </View>
          <View style={styles.closeModal}>
            <Text
              style={styles.textClose} 
              onPress={()=>setIsVisable(!isVisable)}>
                Close
              </Text>
          </View>
        </View>
      </View>
    </Modal>
    </View>
  )
}

export default MovieDescriptionModal;

const styles = StyleSheet.create({
  modalConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 24,
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeModal: {
    borderTopColor: '#ccc',
    borderTopWidth: 2,
    alignItems: 'center',
    width: 200,
    marginTop: 20,
    padding: 20
  },
  textClose: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'blue'
  }

})