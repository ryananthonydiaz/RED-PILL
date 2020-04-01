import { AsyncStorage } from 'react-native';
import isNil from 'lodash/isNil';
import createUserContext from './createUserContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: {
          name: action.user.name,
          role: action.user.role,
        }
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SIGN_OUT':
      return {
        ...state,
        token: null,
        user: {},
      }
    default: 
      return state;
  }
};

const setUser = (dispatch) => async (navigation, { token, user }) => {
    try {
      await AsyncStorage.setItem('token', token);

      dispatch({ type: 'SET_TOKEN', token });
      dispatch({ type: 'SET_USER', user});
      if (!isNil(token) && user.role === 'EMPLOYEE') {
        navigation.navigate('UserDashboard');
      } else if (!isNil(token) && user.role === 'ADMIN') {
        navigation.navigate('AdminDashboard');
      } else {
        throw new Error();
      }
    } catch (error) {}
  };

export const signOut = (dispatch) => async (navigation) => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'SIGN_OUT' });
    navigation.navigate('LoginFlow');
  } catch (error) {
    // TODO: remove console.log()
    console.log(`error from signOut: ${JSON.stringify(error)}`)
  }
};

export const attemptLocalSignIn = (dispatch) => async (navigation) => {
  const token = await AsyncStorage.getItem('token');

  if (!isNil(token)) {
    dispatch({ type: 'SET_TOKEN', token });
    navigation.navigate('UserDashboard', { screen: 'LogHistoryFlow' });
  } else {
    navigate('loginFlow');
  }
}

export const { Provider, Context } = createUserContext(
  authReducer,
  {
    setUser,
    signOut,
    attemptLocalSignIn,
  },
  {
    token: null,
    user: {}
  },
);