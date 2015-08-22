import React      from 'react';
import { Route }  from 'react-router';

import App        from '../layouts/Layout';
import Main       from '../components/Main';
import About      from '../components/About';
import Privacy    from '../components/Privacy';
import How        from '../components/How';

import Chat       from '../components/Chat';

import NotFound   from '../components/NotFound';


export default (

  <Route name="app" component={App}>

    <Route name="main"        path="/"        component={Main} />
    <Route name="about"       path="/about"   component={About} />

    <Route name="privacy"     path="/privacy" component={Privacy} />
    <Route name="how"         path="/how"     component={How} />

    <Route name="chat"        path="/chat"    component={Chat} />

    <Route name="not-found"   path="*"        component={NotFound} />

  </Route>

);
