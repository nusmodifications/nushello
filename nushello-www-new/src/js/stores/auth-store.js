'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import AuthAction from 'actions/auth-action';

var currentUser = null;

var AuthStore = Reflux.createStore({
  listenables: AuthAction,

  getCurrentUser: function () {
    return currentUser;
  },

  onInitCompleted: function (response) {
    if (response.user) {
      currentUser = response.user;

      //
      currentUser.permittedPages = _.pluck(currentUser.pages, 'id');
      currentUser.permittedPages.push('dashboard');

      // user locale setting
      if (currentUser.locale) {
        var localeMap = {
          'en': 'en',
          'en_my': 'en',
          'en_sg': 'en',
          'en_us': 'en',
          'en_vn': 'en',
          'en_id': 'en',
          'th_th': 'th',
          'th': 'th'
        };
        currentUser.locale = localeMap[currentUser.locale];
      } else {
        currentUser.locale = 'en';
      }

      // set user location
      if (currentUser.city_latitude) {
        currentUser.latitude = currentUser.city_latitude;
        currentUser.longitude = currentUser.city_longitude;
      } else if (currentUser.country_hq_city_latitude) {
        currentUser.latitude = currentUser.country_hq_city_latitude;
        currentUser.longitude = currentUser.country_hq_city_longitude;
      } else {
        currentUser.latitude = 3.10820;
        currentUser.longitude = 101.64012;
      }

      this.trigger({
        currentUser: currentUser
      });
    }
  },

  onInitFailed: function (response) {
    this.trigger(response);
  }
});

export default AuthStore;
