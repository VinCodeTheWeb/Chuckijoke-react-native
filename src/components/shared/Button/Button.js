import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Button = ({text, onClick, loading}) => {
  return (
    <TouchableOpacity
      style={styles[`${loading ? 'buttonLoading' : 'button'}`]}
      onPress={onClick}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="#F15A24" />
      ) : (
        <Text style={styles.buttonFont}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F15A24',
    shadowOffset: {width: 0, height: 10},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    width: '100%',
  },
  buttonLoading: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#DDD',
    width: '100%',
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF',
  },
});

export default Button;
