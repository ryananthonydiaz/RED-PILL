import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginFlow/Login';
import AdminLogin from '../screens/loginFlow/AdminLogin';
import Splash from '../screens/loginFlow/Splash';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const options = {
  header: () => null,
  headerShown: () => null,
}

const LoginFlow = () => {
  return (
    <Navigator initialRouteName="Splash" options={options}>
      <Screen
        name="Splash"
        component={Splash}
        options={options}
      />
      <Screen
        name="Login"
        component={Login}
        options={options}
      />
      <Screen
        name="AdminLogin"
        component={AdminLogin}
        options={options}
      />
    </Navigator>
  );
}

export default LoginFlow;
