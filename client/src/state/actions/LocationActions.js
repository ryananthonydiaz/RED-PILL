import * as types from '.';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export const _getLocation = () => async dispatch => {
  console.log('_getLocation() ran')
  try {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }

    const userLocation = await Location.getCurrentPositionAsync({});

    // TODO: remove console.log()
    console.log(userLocation);

    dispatch(addClockInLocation(userLocation));
    return userLocation;
  } catch (error) {
    throw error;
  }
}

export const addClockInLocation = location => ({
  type: types.ADD_CLOCK_IN_LOCATION,
  location,
});
