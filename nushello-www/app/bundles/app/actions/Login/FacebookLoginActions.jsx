import * as actions from '../../constants/Login/FacebookLoginConstants';
import * as api from '../../constants/APIEndpoints';
import apiCall from 'app/libs/apiCall';

export function facebookLogin({ data }) {
  console.log(data);
  return dispatch => {
    dispatch({
      type: actions.AUTH_REQUESTED
    });
    return apiCall ({
      method: 'GET',
      path: api.FACEBOOK_AUTH_API(data.userID, data.accessToken)
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
