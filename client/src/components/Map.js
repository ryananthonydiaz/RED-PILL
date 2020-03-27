import React from 'react';
import { isNil } from 'lodash';
import { Image, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../json/mapStyle.json';

const Map = ({ employeeLocation }) => {
  if (isNil(employeeLocation)) {
    location = {
      latitude: 37.78825,
      longitude: -122.4324,
    }
  }
  const region = {
    ...employeeLocation,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const centerOfMarker = {
    ...employeeLocation,
  }

  return (
    <MapView
      style={styles.map}
      customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      region={region}
      initialRegion={region}
    >
      <Marker
        coordinate={centerOfMarker}
        title="Your Current Location"
      >
        <Image source={require('../assets/idea.png')} style={styles.image} />
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: '100%',
    marginVertical: 15,
  },
  image: {
    height: 60,
    width: 60,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  }
});

export default Map;
