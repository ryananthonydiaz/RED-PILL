import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const LogFormOptions = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Logging Options</Text>
      <TouchableOpacity
        onPress={
          () => {
            navigation.navigate('ClockIn');
          }
        }
      >
        <ListItem
          title="Clock In"
          titleStyle={styles.listTitle}
          containerStyle={styles.listItem}
          chevron
        />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={
        () => {
          navigation.navigate('ClockOut');
        }
      }
    >
      <ListItem
        title="Clock Out"
        titleStyle={styles.listTitle}
        containerStyle={styles.listItem}
        chevron
      />
    </TouchableOpacity>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2c9c5',
  },
  header: {
    fontSize: 30,
    color: '#c0392b',
    textAlign: 'center',
    fontWeight: '100',
    marginVertical: 15,
  },
  listTitle: {
    color: 'white',
    fontWeight: '100',
    fontSize: 20,
  },
  listItem: {
    width: '100%',
    backgroundColor: '#c0392b',
    borderBottomColor: 'white',
    borderBottomWidth: .5,
    borderStyle: 'solid',
  },
});

export default LogFormOptions;