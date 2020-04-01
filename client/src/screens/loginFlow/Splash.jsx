import React, { useEffect, useContext } from 'react';
import { Context as UserContext } from '../../context/UserContext';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const Splash = ({ navigation }) => {
  const { attemptLocalSignIn } = useContext(UserContext);

  useEffect(() => {
    asyncAttemptLocalSignIn = async () => {
      try {
        await attemptLocalSignIn(navigation);
      } catch (error) {
        
      }
    }
  
    asyncAttemptLocalSignIn();
  }, []);

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image source={require('../../assets/splash.jpg')} style={styles.image} />
      </View>
      <View style={{ height: height / 4, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 40, fontWeight: '100', color: 'white'}}>Reddot Electric</Text>
      </View>
      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <TapGestureHandler onHandlerStateChange={() => navigation.navigate('Login')}>
          <View style={styles.button}>
            <Text style={{ fontSize: 30, fontWeight: '100', color: 'white'}}>LOGIN</Text>
          </View>
        </TapGestureHandler>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 50,
    fontWeight: '100',
    color: 'white',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    height: null,
    width: null,
  },
  button: {
    backgroundColor: '#f2c9c5',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  }
});

export default Splash;
