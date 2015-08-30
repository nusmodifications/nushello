'use strict';
export const FACEBOOK_AUTH_API = function(facebookId, accessToken){
  return `/users/auth/${facebookId}/${accessToken}`;
};

export const IVLE_AUTH_API = function(facebookId){
  return `/users/${facebookId}/ivle`;
};

export const USER_PROFILE_API = function(facebookId) {
  return `/users/${facebookId}`;
};

export const FACULTIES_LIST_API = function() {
  return `/faculties`;
};

export const FACULTY_INFO_API = function(facultyId) {
  return `/faculties/${facultyId}`;
};

export const RESIDENCES_LIST_API = function() {
  return `/residences`;
};
