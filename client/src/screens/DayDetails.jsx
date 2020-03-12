import React from 'react';
import { View, StyleSheet } from 'react-native';

const DayDetails = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>
      Day Details
       SCREEN
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

export default DayDetails;