import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmployeeList from '../screens/admin/Employee/EmployeeList';
import Dashboard from '../screens/admin/dashboard/Dashboard';
import Settings from '../screens/shared/Settings';


const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const AdminDashboard = () => {
  return (
    <Navigator>
      <Screen name="EmployeeList" component={EmployeeList} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}

export const AdminDashboardOptions = {
  header: () => null,
}

export default AdminDashboard;