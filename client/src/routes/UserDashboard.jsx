import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/employee/Home';
import LogForm from '../screens/employee/timeCard/LogForm';
import Settings from '../screens/shared/Settings';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    } else if (route.name === 'LogForm') {
      iconName = focused ? 'clock' : 'clock-outline';
      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    } else {
      iconName = focused ? 'ios-exit' : 'md-exit';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions={
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

const UserDashboard = () => {
  return (
    <Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
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