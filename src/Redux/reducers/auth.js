import {SIGN_UP} from '../actions/actionTypes';

const initialState = {
  user: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SIGN_UP:
      return {...state, user: payload};

    default:
      return state;
  }
};
