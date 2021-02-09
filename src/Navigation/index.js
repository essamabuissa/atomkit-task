import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './StackNavigators/AuthStack';
import {AUTHSTACK, APPSTACK} from './screenNames';
import AppStack from './StackNavigators/AppStack';

const {Navigator, Screen} = createStackNavigator();

// get from redux state later;
// const isLoggedIn = false;

const RootNavigator = () => {
  return (
    <Navigator initialRouteName={APPSTACK}>
      <Screen
        name={APPSTACK}
        component={AppStack}
        options={{headerShown: false}}
      />
      <Screen
        name={AUTHSTACK}
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default RootNavigator;
