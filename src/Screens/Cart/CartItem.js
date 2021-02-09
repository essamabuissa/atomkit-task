import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import colors from '../../Theme/colors';
import {translate} from '../../Utils/I18n/I18n';
import Trash from 'react-native-vector-icons/Entypo';
import {connect, useDispatch} from 'react-redux';
import {removeItemFromCart} from '../../Redux/actions/cart';
import NumericCounter from '../../Components/NumericCounter';
import {useState} from 'react';
const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 0,
    backgroundColor: colors.lightFontColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {
    width: '25%',
    borderWidth: 0,
    paddingVertical: 25,
    borderRadius: 15,
  },
  name: {
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
});

const CartItem = ({item, items}) => {
  const {name, image, price, quantity} = item.item;
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: image}} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>Quantity:{quantity}</Text>
          <Text style={styles.name}>
            Total:
            {price * quantity}JOD
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={removeFromCart}>
        <Trash name="trash" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps)(CartItem);
