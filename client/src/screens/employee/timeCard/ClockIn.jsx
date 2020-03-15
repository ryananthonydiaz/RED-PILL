import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const ClockIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Clock In Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ClockIn;