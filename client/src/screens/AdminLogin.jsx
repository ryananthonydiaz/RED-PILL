import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const AdminLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mailIcon = (
    <AntDesign name="mail" size={20} style={{ color: 'white', margin: 0}} />
  );
  const lockIcon = (
    <AntDesign name="lock" size={20} style={{ color: 'white', padding: 0 }} />
  );

  const onSubmit = () => {
    navigation.navigate('UserDashboard');
  }

  // let errorAlert;
  // if (errorMessage.length !== 0) {
  //   errorAlert = <Text style={styles.errorMessage}>{errorMessage}</Text>
  // }

  return (
    <>
      <View style={styles.container}>

        <Text style={styles.header}>ADMIN LOGIN</Text>

        <Input
          leftIcon={mailIcon}
          labelStyle={styles.label}
          inputStyle={styles.input}
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      
        <Input
          secureTextEntry
          leftIcon={lockIcon}
          labelStyle={styles.label}
          inputStyle={styles.input}
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      
        <Button
          type="outline"
          title="Login"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          onPress={() => onSubmit({ email, password })}
        />

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Not an admin? Press here.</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0392b',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: '100',
    textAlign: 'center',
  },
  label: {
    fontWeight: '100',
    color: 'white',
    fontSize: 20,
  },
  input: {
    color: 'white',
    padding: 15,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  button: {
    borderColor: 'white',
    margin: 50,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '100',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 200,
  },
  linkText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '100',
  }
});

export default AdminLogin;