import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import UserDashboard, { UserDashboardOptions } from './UserDashboard';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;


const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Register">
        <Screen name="Login" component={Login} options={{
          header: () => null,
        }} />
        <Screen name="Register" component={Register} options={{
          header: () => null,
        }} />
        <Screen
          name="UserDashboard"
          component={UserDashboard}
          options={UserDashboardOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
