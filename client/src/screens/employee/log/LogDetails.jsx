import React from 'react';
import { View, StyleSheet } from 'react-native';

const LogDetails = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>
      Log Details
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

export default LogDetails;