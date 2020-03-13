import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * This page will show a list of Clock-In, Clock-Out
 * 
 */

const LogForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log Form Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 50,
  },
});

export default LogForm;