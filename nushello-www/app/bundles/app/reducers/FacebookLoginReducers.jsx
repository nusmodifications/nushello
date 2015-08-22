 import * as actions from '../constants/FacebookLoginConstants';

const initialState = {
  type: null,
  errors: null,
  requesting: false,
  data: null
};

export default function facebookLogin(state = initialState, action) {
  const { type, data, errors } = action;

  switch (type) {
    case actions.AUTH_REQUESTED:
      return {
        ...state, 
        type, 
        requesting: true
      };

    case actions.AUTH_SUCCEED:

    console.log(action);
      return {
        type, 
        error: null,
        requesting: false,
        data: data
      };

    case actions.AUTH_FAILED:
      return {
        ...state,
        type,
        errors,
        requesting: false
      };

    default:
      return state;
  }
}