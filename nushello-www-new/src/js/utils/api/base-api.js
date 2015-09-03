'use strict';

import _ from 'lodash';
import axios from 'axios';
import cookie from 'react-cookie';

class BaseAPI {
  constructor() {
    // The API server info
    this.host = 'API_HOST'; // This will be replaced by gulp workflow for different environment
    this.port = 'API_PORT';
    // this.apiVersion = 'v1';
    // this.appType = 'frontend';

    // This will be use as the key for current user data in window.localStorage
    this.currentUserKey = 'current_user';
  }

  clean() {
    // for quick logout
    cookie.remove(this.currentUserKey);
  }

  // Return the base url for API calls
  getBaseUrl() {
    var baseUrl = '';

    if (this.host !== '') {
      baseUrl += this.host;

      if (baseUrl[baseUrl.length - 1] === '/') {
        baseUrl = baseUrl.slice(0, -1);
      }

      if (this.port && parseInt(this.port) !== 80) {
        baseUrl += ':' + this.port;
      }
    }

    // baseUrl += '/api';

    if (this.appType) {
      baseUrl += '/' + this.appType;
    }

    if (this.apiVersion) {
      baseUrl += '/' + this.apiVersion;
    }

    if (this.model) {
      baseUrl += '/' + this.model;
    }

    return baseUrl;
  }

  // Return the access token that is stored in window.localStorage
  getAccessToken() {
    var currentUser;

    try {
      currentUser = cookie.load('current_user');
    } catch (err) {
      throw 'Get AccessToken Err';
    }

    return currentUser && currentUser.accessToken ? currentUser.accessToken : '';
  }

  // Return the headers that can be used to send over to the server
  getHeaders() {
    var headers = {
      'Content-Type': 'application/json'
    };
    var accessToken = this.getAccessToken();

    if (accessToken) {
      headers.Authorization = accessToken;
    }

    return headers;
  }

  ajax(options) {
    return axios(options);
  }

  ajaxAll(promises) {
    return axios.all(promises);
  }

  ajaxFake(data, delay, shouldFail) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (shouldFail) {
          reject(data);
        } else {
          resolve(data);
        }
      }, delay);
    });
  }

  //
  // Helper functions
  //
  get(apiPath, options) {
    var defaultOptions = {
      headers: this.getHeaders()
    };
    options = _.extend(defaultOptions, options);

    return axios
      .get(this.getBaseUrl() + apiPath, options);
  }

  post(apiPath, data, options) {
    var defaultOptions = {
      headers: this.getHeaders()
    };
    options = _.extend(defaultOptions, options);

    return axios
      .post(this.getBaseUrl() + apiPath, data, options);
  }

  put(apiPath, data, options) {
    var defaultOptions = {
      headers: this.getHeaders()
    };
    options = _.extend(defaultOptions, options);

    return axios
      .put(this.getBaseUrl() + apiPath, data, options);
  }

  del(apiPath, options) {
    var defaultOptions = {
      headers: this.getHeaders()
    };
    options = _.extend(defaultOptions, options);

    return axios
      .delete(this.getBaseUrl() + apiPath, options);
  }

  // Create an object
  create(data) {
    return this.post('', data);
  }

  // Retrieve an object with the given id
  initShow(id) {
    return this.get('/' + id);
  }

  // Update an object with the given id
  updateById(id, data) {
    return this.post('/' + id + '/edit', data);
  }

  // Delete an object with the given id
  deleteById(id) {
    return this.del(this.getBaseUrl() + '/' + id);
  }

  // Upload file to AWS S3
  uploadToS3(url, file, type) {
    return axios.put(url, file, {
      headers: {
        'Content-Type': type
      }
    });
  }
}

export default BaseAPI;
