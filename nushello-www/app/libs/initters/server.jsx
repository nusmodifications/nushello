import React                from 'react';
import Router               from 'react-router';
import Location             from 'react-router/lib/Location';
import { combineReducers }  from 'redux';
import { applyMiddleware }  from 'redux';
import { createStore }      from 'redux';
import { Provider }         from 'react-redux';
import middleware           from 'redux-thunk';
import serialize            from 'serialize-javascript';
import Jade                 from 'jade';


export default (req, res, next, params) => {
  const reducer   = combineReducers(params.reducers);
  const store     = applyMiddleware(middleware)(createStore)(reducer);

  const { routes, bundle, locals, Head } = params;

  const location = new Location(req.path, req.query);

  Router.run(routes, location, (error, initialState, transition) => {

    if (error) return res.status(500).send(error);

    try {

      locals.head = React.renderToStaticMarkup(
        <Head cssAsset={locals.cssAsset} />
      );

      locals.body = React.renderToString(
        <Provider store={store}>
          {() => <Router location={location} {...initialState} />}
        </Provider>
      );

      const chunks = __DEV__ ? {} : require('public/assets/chunk-manifest.json');

      locals.chunks = JSON.stringify(chunks);

      const layout = `${process.cwd()}/app/bundles/${bundle}/layouts/Layout.jade`;
      const html   = Jade.compileFile(layout, { pretty: false })(locals);

      res.send(html);

    } catch (err) {

      res.status(500).send(err.stack);

    }

  });

}
