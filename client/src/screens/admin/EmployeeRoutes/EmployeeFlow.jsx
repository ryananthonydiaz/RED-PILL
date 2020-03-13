import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';
import EmployeeDates from './EmployeeDates';
import EmployeeDatesDetails from './EmployeeDatesDetails';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;


const EmployeeFlow = () => {
  return (
      <Navigator initialRouteName="EmployeeList">
        <Screen name="EmployeeList" component={EmployeeList} />
        <Screen name="EmployeeDetail" component={EmployeeDetail} />
        <Screen
          name="EmployeeDates"
          component={EmployeeDates}
        />
        <Screen
          name="EmployeeDatesDetails"
          component={EmployeeDatesDetails}
        />
      </Navigator>
  );
}

export default EmployeeFlow;
