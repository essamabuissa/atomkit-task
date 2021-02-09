import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CHECKOUT} from './actionTypes';

export const addItemToCart = (item, quantity) => (dispatch) => {
  item.quantity = quantity;
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item,
  });
};

export const removeItemFromCart = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  });
};

export const checkoutCartAction = (item) => (dispatch) => {
  dispatch({
    type: CHECKOUT,
  });
};
