import {FETCH_ITEMS, INCREASE, DECREASE} from '../actions/actionTypes';

const initialState = {
  items: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_ITEMS:
      return {...state, items: payload};

    default:
      return state;
  }
};
