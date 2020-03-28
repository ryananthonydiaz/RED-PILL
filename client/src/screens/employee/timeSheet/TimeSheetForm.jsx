import React, { useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import LoadLocationImage from '../../../assets/loadLocation';

const TimeSheetForm = ({ route, navigation }) => {
  const { type } = route.params;

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Press to get your current location');

  const _getLocation = async () => {
    console.log('_getLocation() ran')
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
  
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
  
      // TODO: remove console.log()
      navigation.navigate('LocationConfirmation', { coords, type });
    } catch (error) {
      throw error;
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
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <LoadLocationImage />
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

export default TimeSheetForm;
