import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const LogFormOptions = ({ navigation }) => {

  const data = [
    {
      id: 1,
      title: 'ClockIn',
    },
    {
      id: 2,
      title: 'ClockOut',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.header}>Logging Options</Text>
    <FlatList
      style={{ width: '100%' }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={
        ({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                () => {
                  navigation.navigate(item.title);
                }
              }
            >
              <ListItem
                title={item.title === 'ClockIn' ? 'Clock In' : 'Clock Out'}
                titleStyle={styles.listTitle}
                containerStyle={styles.listItem}
                chevron
              />
            </TouchableOpacity>
          );
        }
      }
    />
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

export default LogFormOptions;