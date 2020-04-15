import firebase from "../../fbconfig";

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNOUT_USER = "SIGNOUT_USER";
export const ERROR = "ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const signinUser = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      return dispatch({ type: SIGNIN_USER, user });
    } catch (err) {
      return dispatch({ type: ERROR, err });
    }
  };
};
