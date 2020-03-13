import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/unAuth/Login';
import AdminLogin from '../screens/unAuth/AdminLogin';
import UserDashboard, { UserDashboardOptions } from './UserDashboard';
import AdminDashboard, { AdminDashboardOptions } from './AdminDashboard';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;


const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name="Login" component={Login} options={{
          header: () => null,
        }} />
        <Screen name="AdminLogin" component={AdminLogin} options={{
          header: () => null,
        }} />
        <Screen
          name="UserDashboard"
          component={UserDashboard}
          options={UserDashboardOptions}
        />
        <Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={AdminDashboardOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
