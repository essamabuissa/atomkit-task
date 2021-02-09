import React from 'react';

import {HOME} from '../../screenNames';

import Home from '../../../Screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';

const {Navigator, Screen} = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Navigator>
      <Screen name={HOME} component={Home} options={{headerShown: false}} />
    </Navigator>
  );
};

export default HomeStack;
