import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Img = ({uri}) => <Image style={styles.image} source={{uri}} />;

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: 200,
    resizeMode: 'stretch',
  },
});

export default Img;
