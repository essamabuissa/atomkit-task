import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ItemCard from './ItemCard';
import {connect} from 'react-redux';
// import Menu from 'react-native-vector-icons/Entypo';
// import Header from '../../Components/Header';
// import colors from '../../Theme/colors';
// import {translate} from '../../Utils/I18n/I18n';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    paddingHorizontal: 10,
  },
  flatList: {
    width: '100%',
    marginTop: 10,
  },
  product: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcome: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  wrapper: {
    marginVertical: 10,
  },
});

const Items = ({labtops}) => {
  const productList = (product) => {
    return <ItemCard product={product} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome To AtomKit Store</Text>
      <FlatList
        numColumns={2}
        style={styles.flatList}
        data={labtops}
        keyExtractor={(item) => item.id}
        renderItem={productList}
        columnWrapperStyle={styles.wrapper}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    labtops: state.itemsReducer.items,
  };
};
export default connect(mapStateToProps)(Items);
