import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Animated,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Button from '../shared/Button/Button';
import Img from '../shared/Img/Img';

const App = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [moveRight] = useState(new Animated.Value(-500));

  const getJoke = async () => {
    setLoading(!loading);
    Animated.timing(moveRight, {
      toValue: -500,
      duration: 0,
    }).start();
    await fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(randomJoke => {
        if (randomJoke) {
          Animated.timing(moveRight, {
            toValue: 0,
            duration: 350,
          }).start();
          setJoke(randomJoke.value);
        }
      });

    setLoading(false);
  };

  const animatedStyles = {
    transform: [
      {
        translateX: moveRight,
      },
    ],
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={[styles.body]}>
          <Img uri="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png" />
          <Animated.Text style={[styles.chuckJokeText, animatedStyles]}>
            {joke
              ? joke
              : moveRight === -500 &&
                'Hey asshole! Get a fucking funny joke by clicking the button below!'}
          </Animated.Text>
          <Button text="Get a joke" onClick={getJoke} loading={loading} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    height: '100%',
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chuckJokeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 27,
  },
});

export default App;
