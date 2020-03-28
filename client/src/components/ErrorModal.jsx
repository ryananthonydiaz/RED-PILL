import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const ErrorModal = () => {
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
  
});

export default ErrorModal;