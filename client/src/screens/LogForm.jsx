import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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