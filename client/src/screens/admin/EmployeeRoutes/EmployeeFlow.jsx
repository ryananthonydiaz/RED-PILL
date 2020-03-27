import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';
import EmployeeDates from './EmployeeDates';
import EmployeeDatesDetails from './EmployeeDatesDetails';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;


const EmployeeFlow = () => {
  const options = {
    headerTitle: '',
    headerTintColor: '#c0392b',
    headerStyle: {
      backgroundColor: '#f2c9c5',
    },
    headerTitleStyle: {
      fontSize: 15,
      color: '#c0392b',
      fontWeight: '100',
    },
    headerBackTitle: () => null,
  }

  return (
      <Navigator initialRouteName="EmployeeList">
        <Screen name="EmployeeList" component={EmployeeList} options={options} />
        <Screen name="EmployeeDetail" component={EmployeeDetail} options={options} />
        <Screen name="EmployeeDates" component={EmployeeDates} options={options} />
        <Screen name="EmployeeDatesDetails" component={EmployeeDatesDetails} options={options} />
      </Navigator>
  );
}

export default EmployeeFlow;
