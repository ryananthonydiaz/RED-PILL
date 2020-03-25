import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/unAuth/Login';
import AdminLogin from '../screens/unAuth/AdminLogin';
import UserDashboard, { UserDashboardOptions } from './UserDashboard';
import AdminDashboard, { AdminDashboardOptions } from './AdminDashboard';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../state/reducers';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://192.168.1.39:5000/',
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazg2ajR2dWQwMHhoMDgzNmMzczRnb2pxIiwiaWF0IjoxNTg1MTEyMzgyLCJleHAiOjE1ODU3MTcxODJ9.JDqef_nRNldxXyS8Vg5fxOu1IDAJYqT4Rw4px7i5DaA`,
  }
});

const client = new ApolloClient({
  cache,
  link
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;


const Routes = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Navigator initialRouteName="Login">
            <Screen
              name="Login"
              component={Login}
              options={{
                header: () => null,
              }}
            />
            <Screen
              name="AdminLogin"
              component={AdminLogin}
              options={{
                header: () => null,
              }}
            />
            <Screen
              name="UserDashboard"
              component={UserDashboard}
              options={UserDashboardOptions}
            />
            <Screen
              name="AdminDashboard"
              component={AdminDashboard}
              options={AdminDashboardOptions}
            />
          </Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default Routes;
