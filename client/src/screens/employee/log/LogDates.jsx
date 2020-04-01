import React, { useEffect, useContext } from 'react';
import { get } from 'lodash';
import { Context as UserContext } from '../../../context/UserContext';
import { locationDatesQuery } from '../../../apollo/server/QueryTags';
import { useQuery } from '@apollo/react-hooks';
import { userQuery } from '../../../apollo/server/QueryTags';
import { format } from 'date-fns';
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const Log = ({ route, navigation }) => {
  const { state: { token, user } } = useContext(UserContext);

  let employee = user;
  if (get(employee, 'name', false) === false) {
    const userQueryResult = useQuery(userQuery);
    employee = userQueryResult.data.user;
  }

  const { loading, data } = useQuery(locationDatesQuery, { variables: { id: token } });
  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  const locationDates = get(data, 'locationDates', []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {get(employee, 'name')}!</Text>
      <Text style={styles.subHeader}>Here are your Submitted Time Sheets</Text>
      <FlatList
        style={{ width: '100%' }}
        data={locationDates}
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
                    navigation.navigate('LogEvents',
                      { id: token, date: item}
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
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 15,
    color: '#c0392b',
    fontWeight: '100',
    marginVertical: 5,
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

export default Log;