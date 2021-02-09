import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import {AUTHSTACK, HOMESTACK} from '../../Navigation/screenNames';
import {checkoutCartAction} from '../../Redux/actions/cart';
import colors from '../../Theme/colors';
import {translate} from '../../Utils/I18n/I18n';
import CartItem from './CartItem';

const styles = StyleSheet.create({
  cart: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  flatList: {
    width: '100%',
    marginTop: 10,
  },
});

const Cart = ({items, user, navigation}) => {
  const cartList = (item) => {
    return <CartItem item={item} />;
  };

  const dispatch = useDispatch();

  const checkoutCart = () => {
    if (user) {
      dispatch(checkoutCartAction());
      alert('Thank you for shopping with us');
    } else {
      alert('Please sign in to checkout');
      navigation.navigate(AUTHSTACK);
    }
  };
  return (
    <View style={styles.container}>
      <Header title={translate('cart.cart')} />
      <FlatList
        style={styles.flatList}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={cartList}
      />
      <View style={{paddingHorizontal: 15}}>
        <Text style={styles.cart}>Delievary: 2.00 JOD</Text>
        <Text style={styles.cart}>
          Total:{' '}
          {items.reduce(
            (accumulator, current) =>
              accumulator + current.price * current.quantity,
            items.length === 0 ? 0 : 2,
          )}
          .00 JOD
        </Text>
      </View>

      <Button
        disabled={items.length === 0 ? true : false}
        onPress={checkoutCart}
        title="Checkout"
        color={
          items.length === 0 ? colors.veryLightGray : colors.lightFontColor
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.cart,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(Cart);
