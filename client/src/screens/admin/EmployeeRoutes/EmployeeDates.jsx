import React from 'react';
import { locationDatesQuery } from '../../../apollo/server/QueryTags';
import { useQuery } from '@apollo/react-hooks';
import { format, parse } from 'date-fns';
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const EmployeeDates = ({ route, navigation }) => {
  const { name, id } = route.params;
  const { error, loading, data } = useQuery(locationDatesQuery, { variables: { id: id } } );

  let contentToDisplay = <ActivityIndicator size="large" color="fff" />;
  if (loading === false) {
    contentToDisplay = (
      <FlatList
      style={{ width: '100%' }}
      data={data.locationDates}
      keyExtractor={(item) => item}
      renderItem={
        ({ item }) => {
          const [month, day, year] = item.split('-');
          const title = format(
            new Date(parseInt(year, 10), (parseInt(month, 10) - 1), parseInt(day, 10)),
            'EEEE MMM dd, y',
          );

          return (
            <TouchableOpacity
              onPress={
                () => {
                  navigation.navigate('EmployeeDatesDetails',
                    { name, id, date: item }
                  )
                }
              }
            >
              <ListItem
                title={title}
                titleStyle={styles.listTitle}
                containerStyle={styles.listItem}
                chevron
              />
            </TouchableOpacity>
          );
        }
      }
    />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dates for: {name}</Text>
      {contentToDisplay}
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

export default EmployeeDates;