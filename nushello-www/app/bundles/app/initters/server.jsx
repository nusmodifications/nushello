import initter    from 'app/libs/initters/server';
import getAsset   from 'app/libs/getAsset';
import config     from 'config/server.app';
import routes     from '../routes/routes';
import reducers   from '../reducers/reducers';
import Head       from '../layouts/Head/Head';
import * as FacebookLoginActions   from '../actions/Login/FacebookLoginActions';


export default (req, res, next) => {

  const { bundle } = config;

  const params = {

    bundle,
    routes,
    Head,
    reducers,
    FacebookLoginActions,

    locals: {

      jsAsset    : getAsset(bundle, 'js'),
      cssAsset   : getAsset(bundle, 'css'),
      vendorAsset: getAsset('vendor', 'js')

    }

  };

  initter(req, res, next, params);

}
