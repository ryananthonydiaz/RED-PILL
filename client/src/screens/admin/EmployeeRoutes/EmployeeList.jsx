import React from 'react';
import { usersQuery } from '../../../apollo/server/QueryTags';
import { useQuery } from '@apollo/react-hooks';
import { SafeAreaView, ActivityIndicator, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

const EmployeeList = ({ navigation }) => {
  const { error, loading, data } = useQuery(usersQuery);

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
    data={data.users}
    keyExtractor={(item) => item.id}
    renderItem={
      ({ item }) => {
        return (
          <TouchableOpacity
            onPress={
              () => {
                navigation.navigate('EmployeeDates', {
                  name: item.name,
                  id: item.id,
                })
              }
            }
          >
            <ListItem
              title={item.name}
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Choose An Employee</Text>
      {contentToDisplay}
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

export default EmployeeList;