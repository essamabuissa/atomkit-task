import React from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const CustomDrawer = (props, user) => {
  //   const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');
  return (
    <View style={{width: width * 0.5}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
