import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageForm
 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        MessageForm
         SCREEN
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

export default MessageForm
;