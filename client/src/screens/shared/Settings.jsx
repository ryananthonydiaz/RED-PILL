import React, { useContext } from 'react';
import { Context as UserContext } from '../../context/UserContext';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeroImage from '../../assets/settings.jsx';

const Settings = ({ navigation }) => {
  const { signOut } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Out</Text>
      <HeroImage />
      <TouchableOpacity style={styles.button} onPress={() => signOut(navigation)}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2c9c5',
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 50,
    fontWeight: '100',
    color: '#c0392b',
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c0392b',
    borderRadius: 10,
    padding: 15,
    width: '90%',
  },
  buttonText: {
    color: '#c0392b',
    textAlign: 'center',
  },
});

export default Settings;
