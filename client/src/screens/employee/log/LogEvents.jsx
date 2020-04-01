import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { locationTypesQuery } from '../../../apollo/server/QueryTags';
import { format } from 'date-fns';
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const LogEvents = ({ route, navigation }) => {
  const { params: { id, date } } = route;
  
  const { loading, data } = useQuery(
    locationTypesQuery, {
      variables: { employeeId: id, date }
    }
  );

  const [month, day, year] = date.split('-');
  const formattedDate = format(
    new Date(parseInt(year, 10), (parseInt(month, 10) - 1), parseInt(day, 10)),
    'EEEE MMM dd, y',
  )

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  contentToDisplay = (
    <FlatList
    style={{ width: '100%' }}
    data={data.locationTypes}
    keyExtractor={(item) => item.id}
    renderItem={
      ({ item }) => {
        let type;
        if (item.type === 'CLOCK_IN') {
          type = 'Clock In Details';
        } else if (item.type === 'LUNCH_START') {
          type = 'Lunch Start Details';
        } else if (item.type === 'LUNCH_END') {
          type = 'Lunch End Details';
        } else {
          type = 'Clock Out Details';
        }

        return (
          <TouchableOpacity
            onPress={
              () => {
                navigation.navigate('LogEventDetails',
                  { locationId: item.id, formattedDate }
                )
              }
            }
          >
            <ListItem
              title={type}
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Time Sheet for:</Text>
      <Text style={styles.subHeader}>{formattedDate}</Text>
      <FlatList
        style={{ width: '100%' }}
        data={data.locationTypes}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => {
            let type;
            if (item.type === 'CLOCK_IN') {
              type = 'Clock In Details';
            } else if (item.type === 'LUNCH_START') {
              type = 'Lunch Start Details';
            } else if (item.type === 'LUNCH_END') {
              type = 'Lunch End Details';
            } else {
              type = 'Clock Out Details';
            }
    
            return (
              <TouchableOpacity
                onPress={
                  () => {
                    navigation.navigate('LogEventDetails',
                      { locationId: item.id, formattedDate }
                    )
                  }
                }
              >
                <ListItem
                  title={type}
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
    marginVertical: 15,
  },
  subHeader: {
    fontSize: 30,
    color: '#c0392b',
    fontWeight: '100',
    marginBottom: 5,
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

export default LogEvents;
