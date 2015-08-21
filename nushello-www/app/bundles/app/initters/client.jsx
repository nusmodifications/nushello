import polyfill   from 'babel/polyfill';  // eslint-disable-line no-unused-vars

import initter    from 'app/libs/initters/client';
import routes     from '../routes/routes';
import reducers   from '../reducers/reducers';

const params = { routes, reducers };

export default initter(params);
