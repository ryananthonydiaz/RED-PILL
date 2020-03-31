import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/unAuth/Login';
import AdminLogin from '../screens/unAuth/AdminLogin';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const options = {
  header: () => null,
}

const UnAuth = () => {
  return (
    <Navigator>
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

export default UnAuth;
