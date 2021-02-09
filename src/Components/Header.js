import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../Theme/colors';

const styles = StyleSheet.create({
  children: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: colors.primary,
    width: '100%',
    height: '12%',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Entypo',
    color: colors.lightFontColor,
  },
});

const Header = ({icon, title, children, navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {icon}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default Header;
