import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogDates from './LogDates';
import LogEvents from './LogEvents';
import LogEventDetails from './LogEventDetails';


const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const options = { header: () => null, headerTitle: 'Log Dates' };

const LogHistoryFlow = () => {
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
    <Navigator >
      <Screen
        name="LogDates"
        component={LogDates}
        options={options}
      />
      <Screen
        name="LogEvents"
        component={LogEvents}
        options={options}
      />
      <Screen
        name="LogEventDetails"
        component={LogEventDetails}
        options={options}
      />
    </Navigator>
  );
}

export default LogHistoryFlow;