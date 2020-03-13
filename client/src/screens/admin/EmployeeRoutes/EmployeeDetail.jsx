import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeDetail = ({ route, navigation }) => {
  const { name, id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details for: {name}</Text>
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