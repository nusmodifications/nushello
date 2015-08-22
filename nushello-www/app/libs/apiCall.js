import request  from 'axios';

import config   from 'config/server';


export default (params) => {

  const method       = params.method;
  const url          = `${params.host || config.apiHost}${params.path}${params.data.join('/')}`;
  console.log(url);
  const responseType = 'json';

  let headers = {
    'Content-Type': 'application/json'
  };

  if (params.auth) Object.assign(headers, params.auth);

  let requestParams = { method, url, responseType, headers };

  if (params.data) requestParams.data = params.data;

  return request(requestParams);

}