import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmployeeDetail = ({ route, navigation }) => {
  const { name, id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details for: {name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EmployeeDates', { name, id })}>
        <Text>Go To Dates</Text>
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

export default EmployeeDetail;