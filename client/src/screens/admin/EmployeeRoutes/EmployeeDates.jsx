import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmployeeDates = ({ route, navigation }) => {
  const { name, id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dates for: {name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EmployeeDatesDetails', { name, id })}>
        <Text>Go To Date Details</Text>
      </TouchableOpacity>
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

export default EmployeeDates;