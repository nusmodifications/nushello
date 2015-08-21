import React                from 'react';
import Router               from 'react-router';
import BrowserHistory       from 'react-router/lib/BrowserHistory';
import { combineReducers }  from 'redux';
import { applyMiddleware }  from 'redux';
import { createStore }      from 'redux';
import { Provider }         from 'react-redux';
import middleware           from 'redux-thunk';

export default (params) => {

  const reducer   = combineReducers(params.reducers);
  const store     = applyMiddleware(middleware)(createStore)(reducer, window.__DATA__);

  const { routes } = params;

  const history = new BrowserHistory();

  const AppContainer = (
    <Provider store={store}>
      {() => <Router history={history} children={routes} />}
    </Provider>
  );

  const appDOMNode = document.getElementById('app');

  React.render(AppContainer, appDOMNode);

}
