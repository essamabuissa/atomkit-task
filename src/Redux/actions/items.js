import {DECREASE, FETCH_ITEMS, INCREASE} from './actionTypes';

export const fetchItems = (items) => (dispatch) => {
  dispatch({
    type: FETCH_ITEMS,
    payload: items,
  });
};
export const increaseQuantity = (item) => ({
  type: INCREASE,
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: DECREASE,
  payload: item,
});
