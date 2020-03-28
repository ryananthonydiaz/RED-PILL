import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TimeSheetOptions from './TimeSheetOptions';
import TimeSheetForm from './TimeSheetForm';
import LocationConfirmation from './LocationConfirmation';
import TimeSheetSubmitted from './TimeSheetSubmitted';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const TimeSheetFlow = () => {
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
  };

  return (
    <Navigator initialRouteName="TimeSheetOptions">
      <Screen
        name="TimeSheetOptions"
        component={TimeSheetOptions}
        options={options}
      />
      <Screen
        name="TimeSheetForm"
        component={TimeSheetForm}
        options={options}
      />
      <Screen
        name="LocationConfirmation"
        component={LocationConfirmation}
        options={options}
      />
      <Screen
        name="TimeSheetSubmitted"
        component={TimeSheetSubmitted}
        options={{ header: () => null }}
      />
    </Navigator>
  );
}

export default TimeSheetFlow;