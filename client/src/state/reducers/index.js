import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer';

const appReducer = combineReducers({
  location: LocationReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
