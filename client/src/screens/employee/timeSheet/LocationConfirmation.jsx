import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { createLocationMutation } from '../../../apollo/server/MutationTags';
import { format } from 'date-fns';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Map from '../../../components/Map';
import ConfirmationModal from '../../../components/ConfirmationModal';

const LocationConfirmation = ({ route, navigation }) => {
  const { params: { coords, type } } = route;
  const location ={
    latitude: coords.latitude,
    longitude: coords.longitude,
  }
  const [modalVisible, setModalVisible] = useState(false);

  const [ createLocation, {  } ] = useMutation(createLocationMutation);

  const _submitLocation = async (longitude, latitude) => {
    try {
      const { data: { createLocation: timeAndLocation } } = await createLocation({
        variables: { type, latitude, longitude, }
      });

      const [month, day, year] = timeAndLocation.date.split('-');
      const formattedDate = format(
        new Date(parseInt(year, 10), (parseInt(month, 10) - 1), parseInt(day, 10)),
        'EEEE MMM dd, y',
      );

      setModalVisible(false);

      navigation.navigate('TimeSheetSubmitted', {
        locationId: timeAndLocation.id,
        formattedDate,
      });
    } catch (error) {
      
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ConfirmationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        action={() => _submitLocation(coords.longitude, coords.latitude)}
      />
      <Text style={styles.header}>Location Confirmation</Text>
      <Text style={styles.subHeader}>Below is the location that will be submitted.</Text>
      <Map employeeLocation={location} />
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Submit Time Sheet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2c9c5',
  },
  header: {
    fontSize: 30,
    color: '#c0392b',
    fontWeight: '100',
    marginVertical: 15,
  },
  subHeader: {
    fontSize: 20,
    textAlign: 'center',
    color: '#c0392b',
    fontWeight: '100',
    marginBottom: 5,
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c0392b',
    borderRadius: 10,
    padding: 15,
    width: '90%',
  },
  buttonText: {
    color: '#c0392b',
    textAlign: 'center',
  },
});

export default LocationConfirmation;