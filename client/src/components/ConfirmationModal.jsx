import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const ConfirmationModal = ({ modalVisible, setModalVisible, action }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Submit Time & Location</Text>
          <TouchableHighlight style={styles.openButton} onPress={action}>
            <Text style={styles.textStyle}>Yes</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: '100',
    color: '#c0392b',
  },
  openButton: {
    backgroundColor: '#f2c9c5',
    borderRadius: 20,
    borderColor: '#c0392b',
    borderWidth: 1,
    padding: 10,
    elevation: 2,
    margin: 5,
    width: 250,
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f2c9c5',
    borderColor: '#c0392b',
    borderWidth: 2,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '100',
    color: '#c0392b',
  }
});

export default ConfirmationModal;