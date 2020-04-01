import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import LoginFlow from './LoginFlow';

const Routes = () => {
  const Stack = createStackNavigator();
  const { Navigator, Screen } = Stack;
  const options = { header: () => null }

  return (
      <NavigationContainer>
        <Navigator>
          <Screen
            name="LoginFlow"
            component={LoginFlow}
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
  );
}

export default Routes;
