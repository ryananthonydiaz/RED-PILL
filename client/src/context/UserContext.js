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

const setUser = (dispatch) => async ({ token, user }) => {
    try {
      await AsyncStorage.setItem('token', token);
      dispatch({ type: 'SET_TOKEN', token });
      dispatch({ type: 'SET_USER', user})
    } catch (error) {}
  };

export const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'SIGN_OUT' });
  navigate('loginFlow');
};

export const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (!isNil(token)) {
    dispatch({ type: 'SIGN', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
}

export const { Provider, Context } = createUserContext(
  authReducer,
  {
    setUser,
    signOut,
    tryLocalSignIn,
  },
  {
    token: null,
    user: {
      name: '',
      role: '',
    }
  },
);