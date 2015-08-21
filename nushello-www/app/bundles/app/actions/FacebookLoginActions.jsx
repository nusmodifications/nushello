import * as actions from '../constants/CommentsConstants';
import apiCall from 'app/libs/apiCall';

export function facebookLogin({ data }) {
  return dispatch => {
    dispatch({
      type: actions.AUTH_REQUESTED
    });

    return apiCall ({
      method: 'POST',
      host: 'api.nushello.com/users/auth', // need config
      data: data
    }).then(res => {
      dispatch({
        type: actions.AUTH_SUCCEED,
        data: res.data // need to figure out this
      });
    }).catch(res => {
      type  : actionS.AUTH_FAILED,
      errors: {
        code: res.status,
        data: res.data
      }
    });
  };
}
