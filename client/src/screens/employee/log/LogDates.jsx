import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../../../components/Map';

/**
 * 
 * This page will be a list of the current employee's 
 * log history in which they can click to see more details
 * 
 * 
 */

const LogDates = () => {
  return (
    <View style={styles.container}>
      <Text>Log Dates Component</Text>
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