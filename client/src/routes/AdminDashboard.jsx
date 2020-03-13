import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmployeeFlow from '../screens/admin/EmployeeRoutes/EmployeeFlow';
import Dashboard from '../screens/admin/dashboard/Dashboard';
import Settings from '../screens/shared/Settings';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';


const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'EmployeeFlow') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    } else if (route.name === 'Dashboard') {
      return focused
      ?
      <FontAwesome name="database" size={size} color={color} />
      :
      <Feather name="database" size={size} color={color} />;
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

const AdminDashboard = () => {
  return (
    <Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Screen name="EmployeeFlow" component={EmployeeFlow} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}

export const AdminDashboardOptions = {
  header: () => null,
}

export default AdminDashboard;