import React from 'react';
import { Provider as UserProvider } from '../context/UserContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import UnAuth from './UnAuth';

const Routes = () => {
  const Stack = createStackNavigator();
  const { Navigator, Screen } = Stack;
  const options = { header: () => null }

  return (
    <UserProvider>
      <NavigationContainer>
        <Navigator initialRouteName="UnAuth" options={options}>
          <Screen
            name="UnAuth"
            component={UnAuth}
            options={options}
          />
          <Screen
            name="UserDashboard"
            component={UserDashboard}
            options={options}
          />
          <Screen
            name="AdminDashboard"
            component={AdminDashboard}
            options={options}
          />
        </Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default Routes;
