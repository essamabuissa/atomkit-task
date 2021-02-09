/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/';
import {PersistGate} from 'redux-persist/integration/react';
import {fetchItems, fetchLabtops, fetchPhones} from './src/Redux/actions';
import {labtops, phones} from './src/Redux/data';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  store.dispatch(fetchItems(phones));

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
