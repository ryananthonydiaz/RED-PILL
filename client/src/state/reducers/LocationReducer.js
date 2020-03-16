import { ADD_CLOCK_IN_LOCATION } from '../actions/index';

const initialState = {
  clockInLocation: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLOCK_IN_LOCATION:
      return {
        ...state,
        clockInLocation: action.location,
      };
      default:
        return state;
  }
}