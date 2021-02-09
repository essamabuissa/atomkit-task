import {SIGN_UP} from './actionTypes';
export const signUp = (user, navigateToHome) => (dispatch) => {
  dispatch({
    type: SIGN_UP,
    payload: user,
  });
  navigateToHome();
};
