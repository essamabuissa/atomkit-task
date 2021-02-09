import React from 'react';

import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import colors from '../Theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
  },
  square: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
});

const NumericCounter = ({customStyle, item, quantity, setQuantity}) => {
  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Quantity:</Text>
      <TouchableOpacity style={{paddingLeft: 5}} onPress={decrease}>
        <View style={styles.square}>
          <Text>-</Text>
        </View>
      </TouchableOpacity>
      <Text medium primary style={{paddingHorizontal: 20}}>
        {quantity}
      </Text>
      <TouchableOpacity style={{paddingLeft: 0}} onPress={increase}>
        <View style={styles.square}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NumericCounter;
