import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeDatesDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Employee Dates Details Page</Text>
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

export default EmployeeDatesDetails;