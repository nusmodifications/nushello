import React      from 'react';
import { Route }  from 'react-router';

import App        from '../layouts/Layout';
import MainPage       from '../components/Main';
import AboutPage      from '../components/pages/about-page/AboutPage';
import PrivacyPage    from '../components/pages/privacy-page/PrivacyPage';
import HowPage        from '../components/pages/how-page/HowPage';

import ChatPage       from '../components/pages/chat-page/ChatPage';

import NotFoundPage   from '../components/pages/not-found-page/NotFoundPage';


export default (

  <Route name="app" component={App}>

    <Route name="main"        path="/"        component={MainPage} />
    <Route name="about"       path="/about"   component={AboutPage} />

    <Route name="privacy"     path="/privacy" component={PrivacyPage} />
    <Route name="how"         path="/how"     component={HowPage} />

    <Route name="chat"        path="/chat"    component={ChatPage} />

    <Route name="not-found"   path="*"        component={NotFoundPage} />

  </Route>

);
