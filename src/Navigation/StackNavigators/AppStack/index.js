import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOMESTACK, CARTSTACK} from '../../screenNames';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/Entypo';
import CartStack from './CartStack';
import colors from '../../../Theme/colors';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const {Navigator, Screen} = createBottomTabNavigator();

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.lightGray,
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    position: 'absolute',
    borderRadius: 60,
    alignItems: 'center',
    bottom: 30,
  },
});
const AppStack = ({quantity}) => {
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.background,
        inactiveTintColor: colors.darkFontColor,
        style: {
          backgroundColor: colors.primary,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName = '';
          switch (route.name) {
            case HOMESTACK:
              iconName = 'home';
              return <Icon size={30} name={iconName} style={{color}} />;

            case CARTSTACK:
              iconName = 'shopping-cart';
              return (
                <>
                  <Icon size={30} name={iconName} style={{color}} />
                  {quantity > 0 && (
                    <View style={styles.badge}>
                      <Text style={{fontWeight: 'bold'}}>{quantity}</Text>
                    </View>
                  )}
                </>
              );
          }
        },
      })}>
      <Screen name={HOMESTACK} component={HomeStack} />
      <Screen name={CARTSTACK} component={CartStack} />
    </Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    quantity: state.cartReducer.cart.length,
  };
};

export default connect(mapStateToProps)(AppStack);
