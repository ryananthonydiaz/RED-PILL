import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';
import EmployeeDates from './EmployeeDates';
import EmployeeDatesDetails from './EmployeeDatesDetails';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;


const EmployeeRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name="EmployeeList" component={EmployeeList} options={{
          header: () => null,
        }} />
        <Screen name="AdminLogin" component={AdminLogin} options={{
          header: () => null,
        }} />
        <Screen
          name="UserDashboard"
          component={UserDashboard}
          options={UserDashboardOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default EmployeeRoutes;
