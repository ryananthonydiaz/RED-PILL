import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogDates from './LogDates';
import LogEvents from './LogEvents';
import LogDetails from './LogDetails';


const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const options = { header: () => null, headerTitle: 'Log Dates' };

const LogHistoryFlow = () => {
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
        options={{ headerTitle: 'Log Events' }}
      />
      <Screen
        name="LogDetails"
        component={LogDetails}
        options={{ headerTitle: 'Log Details' }}
      />
    </Navigator>
  );
}

export default LogHistoryFlow;