import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogHistoryFlow from '../screens/employee/log/LogHistoryFlow';
import LogFormFlow from '../screens/employee/timeCard/LogFormFlow';
import Settings from '../screens/shared/Settings';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'LogHistoryFlow') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    } else if (route.name === 'LogFormFlow') {
      iconName = focused ? 'clock' : 'clock-outline';
      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    } else {
      iconName = focused ? 'ios-exit' : 'md-exit';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

const UserDashboard = () => {
  return (
    <Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Screen
        name="LogHistoryFlow"
        component={LogHistoryFlow}
        options={{ tabBarLabel: 'Log History' }}
      />
      <Screen
        name="LogFormFlow"
        component={LogFormFlow}
        options={{ tabBarLabel: 'Time Card' }}
      />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}

export const UserDashboardOptions = {
  header: () => null,
}

export default UserDashboard;
