import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const ClockOut = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Clock Out');

  const _getLocation = async () => {
    setLoading(true);
    setDisabled(true);

    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
        console.log('Permission denied');
        setLoading(false);
        return;
      }
  
      const userLocation = await Location.getCurrentPositionAsync({});

      // TODO: remove console.log()
      console.log(userLocation);

      setLoading(false);
      setButtonText('Your Location is sent!');

      return userLocation;
    } catch (error) {
      // TODO: Properly Error Handle Error case
      console.log(error);
    }
  }

  let spinner = (
    <ActivityIndicator
      size="large"
      color="#c0392b"
      style={styles.activity}
    />
  );
  if (loading === false) {
    spinner = null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {spinner}
      <TouchableOpacity
        disabled={disabled}
        style={styles.button}
        onPress={_getLocation}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
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
  activity: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 100,
  },
});

export default ClockOut;
