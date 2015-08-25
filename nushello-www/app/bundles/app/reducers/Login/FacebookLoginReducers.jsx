import * as actions from '../../constants/Login/FacebookLoginConstants';
import cookie from 'react-cookie';

const initialState = {
  type: null,
  errors: null,
  requesting: false,
  data: null,
  auth: undefined
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
      cookie.save('auth', {
        accessToken: data.data.accessToken,
        type: data.type
      });

      return {
        type, 
        error: null,
        requesting: false,
        auth: {
          accessToken: data.data.accessToken,
          type: data.type
        }
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