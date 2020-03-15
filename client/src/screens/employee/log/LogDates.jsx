import React, { useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 
 * This page will be a list of the current employee's 
 * log history in which they can click to see more details
 * 
 * 
 */

const LogDates = () => {
  const [location, setLocation] = useState();

  const _getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }
  
      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation);
      return userLocation;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Log Dates SCREEN
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
  },
});

export default LogDates;