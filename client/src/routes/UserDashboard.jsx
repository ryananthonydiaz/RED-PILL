import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogHistoryFlow from '../screens/employee/log/LogHistoryFlow';
import TimeSheetFlow from '../screens/employee/timeSheet/TimeSheetFlow';
import Settings from '../screens/shared/Settings';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'LogHistoryFlow') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    } else if (route.name === 'TimeSheetFlow') {
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
        options={{ tabBarLabel: 'History' }}
      />
      <Screen
        name="TimeSheetFlow"
        component={TimeSheetFlow}
        options={{ tabBarLabel: 'Submit Time' }}
      />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}

export default UserDashboard;
