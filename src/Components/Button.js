import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    marginHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontWeight: 'bold',
  },
});

const Button = ({title, color, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor: color,
        shadowOpacity: disabled ? 0 : 0.1,
      }}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
