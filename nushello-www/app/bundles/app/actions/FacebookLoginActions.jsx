import * as actions from '../constants/FacebookLoginConstants';
import apiCall from 'app/libs/apiCall';

export function facebookLogin({ data }) {
  return dispatch => {
    dispatch({
      type: actions.AUTH_REQUESTED
    });
    return apiCall ({
      method: 'GET',
      host: 'api.nushello.com/users/auth', // need config
      data: data
    }).then(res => {
      dispatch({
        type: actions.AUTH_SUCCEED,
        data: res.data // need to figure out this
      });
    }).catch(res => {
      dispatch({
        type  : actions.AUTH_FAILED,
        errors: {
          code: res.status,
          data: res.data
        }
      });
    });
  };
}
