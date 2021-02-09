import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import NumericCounter from '../../../Components/NumericCounter';
import colors from '../../../Theme/colors';
import Basket from 'react-native-vector-icons/Entypo';
import {connect, useDispatch} from 'react-redux';
import {addItemToCart} from '../../../Redux/actions/cart';
// import colors from '../../Theme/colors';
// import {translate} from '../../Utils/I18n/I18n';
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    borderRadius: 10,
    flex: 0.5,
    shadowOpacity: 0.2,
    backgroundColor: colors.lightFontColor,
  },
  icon: {width: '18%', alignSelf: 'center'},
  image: {
    padding: 40,
  },
  productDescription: {
    fontSize: 10,
    paddingVertical: 2,
  },
  productName: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 2,
  },
});

const ItemCard = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product.item, quantity));
  };

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{uri: product.item.image}} style={styles.image} />
      <View style={{paddingHorizontal: 5}}>
        <Text style={styles.productName}>{product.item.name}</Text>
        <Text style={styles.productDescription}>
          {product.item.description}
        </Text>
        <Text style={styles.productPrice}>
          {product.item.price * quantity}JOD
        </Text>
        <NumericCounter
          setQuantity={setQuantity}
          quantity={quantity}
          item={product}
        />
        <TouchableOpacity onPress={addToCart} style={styles.icon}>
          <Basket style={{}} name="shopping-basket" size={30} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.cart,
    quantity: state.itemsReducer.items[0].quantity,
  };
};

export default connect(mapStateToProps)(ItemCard);
