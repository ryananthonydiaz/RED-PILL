import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogDates from './LogDates';
import LogEvents from './LogEvents';
import LogEventDetails from './LogEventDetails';


const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const options = { header: () => null, headerTitle: 'Log Dates' };

const LogHistoryFlow = ({ route }) => {
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
        name="LogEventDetails"
        component={LogEventDetails}
        options={{ headerTitle: 'Log Dates Details' }}
      />
    </Navigator>
  );
}

export default LogHistoryFlow;