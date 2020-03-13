import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/employee/Home';
import LogForm from '../screens/employee/timeCard/LogForm';
import Settings from '../screens/shared/Settings';

const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const UserDashboard = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="LogForm" component={LogForm} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}

export const UserDashboardOptions = {
  header: () => null,
}

export default UserDashboard;