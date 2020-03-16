import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux';
import { _getLocation } from '../../../state/actions/LocationActions';
import LoadLocationImage from '../../../assets/loadLocation';

const ClockIn = ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Press to get your current location');

  const logLocation = async () => {
    navigation.navigate('some new location where map is full screen and asks user to submit location')
    setDisabled(true);
    try {
      await dispatch(_getLocation());
    } catch (error) {
      console.log(error)
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
        onPress={logLocation}
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

export default ClockIn;
