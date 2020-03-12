import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register SCREEN</Text>
      <Button
        title="Go To Login"
        onPress={() => navigation.navigate('Login')}
      />
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

export default Register;