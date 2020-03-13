import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * This page will simply be a page they can log out from.
 * 
 */

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Settings SCREEN
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

export default Settings;