import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MessageForm from '../screens/MessageForm';
import LogForm from '../screens/LogForm';

const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const UserDashboard = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="MessageForm" component={MessageForm} />
      <Screen name="LogForm" component={LogForm} />
    </Navigator>
  );
}

export const UserDashboardOptions = {
  header: () => null,
}

export default UserDashboard;