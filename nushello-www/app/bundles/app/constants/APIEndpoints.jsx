export const FACEBOOK_AUTH_API = function(facebookId, accessToken){
	return `users/auth/${facebookId}/${accessToken}`;
};

export const IVLE_AUTH_API = function(facebookId){
	return `users/${facebookId}/ivle`;
};

