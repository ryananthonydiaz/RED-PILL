import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/unAuth/Login';
import AdminLogin from '../screens/unAuth/AdminLogin';
import UserDashboard, { UserDashboardOptions } from './UserDashboard';
import AdminDashboard, { AdminDashboardOptions } from './AdminDashboard';
import ApolloProvider, { client } from '../apollo/client/client';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const options = {
  header: () => null,
}

const Routes = () => {
  return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Navigator initialRouteName="Login">
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
      </ApolloProvider>
  );
}

export default Routes;
