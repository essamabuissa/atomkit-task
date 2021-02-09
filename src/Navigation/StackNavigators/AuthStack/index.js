import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {SIGNUP} from '../../screenNames';

import SignUp from '../../../Screens/Auth/SignUp';

const {Navigator, Screen} = createStackNavigator();

const AuthStack = () => {
  return (
    <Navigator>
      <Screen name={SIGNUP} component={SignUp} options={{headerShown: false}} />
    </Navigator>
  );
};

export default AuthStack;
