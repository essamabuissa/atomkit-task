import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {CART} from '../../screenNames';

import Cart from '../../../Screens/Cart';

const {Navigator, Screen} = createStackNavigator();

const CartStack = () => {
  return (
    <Navigator>
      <Screen name={CART} component={Cart} options={{headerShown: false}} />
    </Navigator>
  );
};

export default CartStack;
