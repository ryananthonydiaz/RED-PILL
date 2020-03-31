import React, { useState, useContext } from 'react';
import { Context as UserContext } from '../../context/UserContext';
import { useMutation } from '@apollo/react-hooks';
import { loginMutation } from '../../apollo/server/MutationTags';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const [ login, { } ] = useMutation(loginMutation);

  const mailIcon = (
    <AntDesign name="mail" size={20} style={{ color: 'white', margin: 0}} />
  );

  const lockIcon = (
    <AntDesign name="lock" size={20} style={{ color: 'white', padding: 0 }} />
  );

  const onSubmit = async (email, password) => {
    try {
      const { data: { login: { token, user } } } = await login({ variables: { email, password } });
      setUser({ token, user });

      navigation.navigate('UserDashboard');
    } catch (error) {
      // TODO: Insert Uniform error modal
      const err = error.toString();
      
      if (err.includes('USER_NOT_FOUND')) {
        console.log('We had trouble finding you. Please make sure your email/password are correct');
      } else if (err.includes('INVALID_PASSWORD')) {
        console.log('Whoops, something went wrong. Please try again.');
      } else {
        console.log(error)
        console.log('Please try again.');
      }

    }
  }

  return (
      <SafeAreaView style={styles.container}>

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

      </SafeAreaView>
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