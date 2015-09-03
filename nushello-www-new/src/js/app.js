'use strict';

import _ from 'lodash';
import axios from 'axios';
import React from 'react';
import Router from 'react-router';
import Routes from './routes';

require('styles/pe-icon-7-stroke.css');

function initApp() {
  //
  // Remove `withCredentials` on `staging` and `production`
  //
  axios.interceptors.request.use(function (config) {
    if (location && location.hostname === 'localhost' && (config.url.indexOf('/auth/me') > -1) ||
        config.url.indexOf('/auth/logout') > -1) {
      config.withCredentials = true;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  //
  // Init the error handler
  //
  axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

  //
  // Init the routing and start the app
  //
  let HistoryLocation = Router.HistoryLocation;
  let _HistoryLocationPush = HistoryLocation.push;
  HistoryLocation.push = (path) => {
    let pathname = path.split('?')[0];
    _HistoryLocationPush.call(HistoryLocation, path);
  };
  Router.run(Routes, HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('app'));
  });
}

initApp();
