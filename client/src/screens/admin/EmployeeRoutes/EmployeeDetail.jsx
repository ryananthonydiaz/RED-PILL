import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { locationDetailQuery } from '../../../apollo/server/QueryTags';
import { format } from 'date-fns';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import Map from '../../../components/Map';

const EmployeeDetail = ({ route }) => {
  const { name, locationId, formattedDate } = route.params;

  const { loading, data } = useQuery(locationDetailQuery, { variables: { locationId: locationId } });

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  const location = {
    latitude: parseFloat(data.locationDetail.latitude),
    longitude: parseFloat(data.locationDetail.longitude),
  }
  const map = (<Map employeeLocation={location} />);

  const dateObject = new Date(parseInt(data.locationDetail.timestamp));
  const time = format(dateObject, 'h:mm a');

  let formattedType;
  if (data.locationDetail.type === 'CLOCK_IN') {
    formattedType = 'Clocked In';
  } else if (data.locationDetail.type === 'LUNCH_START') {
    formattedType = 'Started Lunch';
  } else if (data.locationDetail.type === 'LUNCH_END') {
    formattedType = 'Ended Lunch';
  } else {
    formattedType = 'Clocked Out';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Time Sheet for:</Text>
      <Text style={styles.subHeader}>{formattedDate}</Text>
      <Text>{name} {formattedType} at {time}</Text>
      {map}
    </View>
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
  listTitle: {
    color: 'white',
    fontWeight: '100',
    fontSize: 20,
  },
  listItem: {
    backgroundColor: '#c0392b',
    borderBottomColor: 'white',
    borderBottomWidth: .5,
    borderStyle: 'solid',
  },
});

export default EmployeeDetail;