import {combineReducers} from 'redux';
import itemsReducer from './items';
import cartReducer from './cart';
import authReducer from './auth';

export default combineReducers({
  itemsReducer,
  cartReducer,
  authReducer,
});
