import React, { useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LoadLocationImage from '../../../assets/loadLocation';

const TimeSheetForm = ({ route, navigation }) => {
  const { type } = route.params;

  // TODO: Needs spinner/loading logic and/or disable button while loading
  const _getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
  
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});

      navigation.navigate('LocationConfirmation', { coords, type });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <LoadLocationImage />
      <TouchableOpacity
        style={styles.button}
        onPress={_getLocation}
      >
        <Text style={styles.buttonText}>Press to get your current location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2c9c5',
    paddingHorizontal: 15,
    position: 'relative',
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c0392b',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  },
  buttonText: {
    color: '#c0392b',
    textAlign: 'center',
  },
});

export default TimeSheetForm;
