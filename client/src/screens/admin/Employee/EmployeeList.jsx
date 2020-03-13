import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EmployeeList</Text>
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
  }
});

export default EmployeeList;