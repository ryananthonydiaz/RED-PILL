import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogFormOptions from './LogFormOptions';
import ClockIn from './ClockIn';
import ClockOut from './ClockOut';


const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const options = { header: () => null, headerTitle: 'Options' };

const LogFormFlow = () => {
  return (
    <Navigator >
      <Screen
        name="LogFormOptions"
        component={LogFormOptions}
        options={options}
      />
      <Screen
        name="ClockIn"
        component={ClockIn}
        options={{ headerTitle: 'Clock In' }}
      />
      <Screen
        name="ClockOut"
        component={ClockOut}
        options={{ headerTitle: 'Clock Out' }}
      />
    </Navigator>
  );
}

export default LogFormFlow;