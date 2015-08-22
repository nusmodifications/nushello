import * as actions from '../../constants/Login/FacebookLoginConstants';
import apiCall from 'app/libs/apiCall';

export function facebookLogin({ data }) {
  console.log(data);
  return dispatch => {
    dispatch({
      type: actions.AUTH_REQUESTED
    });
    return apiCall ({
      method: 'GET',
      host: 'http://api.nushello.com/users/auth/' + data.userID + '/' + data.accessToken, // need config
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
