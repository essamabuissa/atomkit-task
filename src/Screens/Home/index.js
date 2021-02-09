import React from 'react';
import {View, StyleSheet} from 'react-native';
import Menu from 'react-native-vector-icons/Entypo';
import Header from '../../Components/Header';
import {translate} from '../../Utils/I18n/I18n';
import Items from './Items';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title={translate('home.home')}
        icon={<Menu name="menu" size={30} />}
      />
      <Items />
    </View>
  );
};

export default Home;
