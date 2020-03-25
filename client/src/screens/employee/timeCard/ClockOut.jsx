import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Map from '../../../components/Map';

const ClockOut = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Clock Out');

  const logLocation = async () => {
    console.log('logLocation() ran')
    setLoading(true);
    setDisabled(true);
    try {
      await dispatch(_getLocation());
      setLoading(false);
      setButtonText('You Location has been sent!');
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
    <SafeAreaView style={styles.container}>
      <Map />
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
