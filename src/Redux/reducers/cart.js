import {
  ADD_ITEM_TO_CART,
  CHECKOUT,
  REMOVE_ITEM_FROM_CART,
} from '../actions/actionTypes';

const initialState = {
  cart: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      return {...state, cart: [payload, ...state.cart]};
    case REMOVE_ITEM_FROM_CART:
      const removedItem = payload.item.id;
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== removedItem)],
      };

    case CHECKOUT:
      return {
        cart: [],
      };

    default:
      return state;
  }
};
