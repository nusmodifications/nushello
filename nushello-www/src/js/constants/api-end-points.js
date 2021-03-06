'use strict';
export const TOKEN_VALIDATE_API = function(facebookId) {
  return `/users/${facebookId}/auth`;
};

export const FACEBOOK_AUTH_API = function(facebookId, accessToken) {
  return `/users/auth/${facebookId}/${accessToken}`;
};

export const IVLE_AUTH_API = function(facebookId) {
  return `/users/${facebookId}/ivle`;
};

export const USER_PROFILE_API = function(facebookId) {
  return `/users/${facebookId}`;
};

export const USER_UPDATE_API = function(facebookId) {
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

export const CHAT_API_TOKEN = function(facebookId) {
	return `/users/${facebookId}/conversations/token`;
};

export const CHAT_API_FETCH = function(facebookId) {
	return `/users/${facebookId}/conversations/`;
};

export const CHAT_API_NEW = function(facebookId) {
  return `/users/${facebookId}/conversations`;
};

export const MATCHES_GET_ALL = function(facebookId) {
  return `/users/${facebookId}/matches`;
};

// NOTE: userId is NOT FacebookID, it's user id
export const MATCHES_GET_USER = function(facebookId, userId) {
  return `/users/${facebookId}/matches/${userId}`;
};

