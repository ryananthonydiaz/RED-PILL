import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 
 * This page will be a list of the current employee's 
 * log history in which they can click to see more details
 * 
 * 
 */

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        HOME SCREEN
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
  },
});

export default Home;