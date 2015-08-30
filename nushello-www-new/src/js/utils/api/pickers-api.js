'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';
var APIEndPoints = require('constants/api-end-points');

class PickersAPI extends BaseAPI {
  constructor() {
    super();
  }

  register() {
  }

  fetchFaculties() {
    var faculties = this.get(APIEndPoints.FACULTIES_LIST_API());

    faculties
      .then((res)=> {
      })
      .catch((error)=> {
        if (error.status === 401) {
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST?path=' + encodeURIComponent(window.location.pathname);
          } else {
            window.location.href = 'API_HOST/?path=' + encodeURIComponent(window.location.pathname);
          }
        }
      });
    return faculties;
  }

  fetchResidences() {
    var residences = this.get(APIEndPoints.RESIDENCES_LIST_API());

    residences
      .then((res)=> {
      })
      .catch((error)=> {
        if (error.status === 401) {
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST?path=' + encodeURIComponent(window.location.pathname);
          } else {
            window.location.href = 'API_HOST/?path=' + encodeURIComponent(window.location.pathname);
          }
        }
      });
    return residences;
  }


}

export default new PickersAPI();
