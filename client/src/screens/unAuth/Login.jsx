import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const Login = ({ navigation }) => {
  const loginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!){
      login(data: { email: $email, password: $password }){
        user {
          name
          email
          password
          role
        }
        token
      }
    }
  `;

  const [ login, { loading, error } ] = useMutation(loginMutation);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mailIcon = (
    <AntDesign name="mail" size={20} style={{ color: 'white', margin: 0}} />
  );
  const lockIcon = (
    <AntDesign name="lock" size={20} style={{ color: 'white', padding: 0 }} />
  );

  const onSubmit = async (email, password) => {
    const data = await login({ variables: { email, password } });

    if (data) {
      console.log(data);
    } else {
      console.log(error)
    }
  }

  return (
    <>
      <View style={styles.container}>

        <Text style={styles.header}>LOGIN</Text>

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
          onPress={() => onSubmit(email, password)}
        />

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('AdminLogin')}>
          <Text style={styles.linkText}>Are you an admin? Press here.</Text>
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

export default Login;