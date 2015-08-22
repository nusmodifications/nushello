import React      from 'react';
import { Route }  from 'react-router';

import App        from '../layouts/Layout';
import MainPage       from '../components/Main';

import IvlePage       from '../components/pages/ivle-page/IvlePage';
import ChatPage       from '../components/pages/chat-page/ChatPage';

import AboutPage      from '../components/pages/about-page/AboutPage';
import PrivacyPage    from '../components/pages/privacy-page/PrivacyPage';
import HowPage        from '../components/pages/how-page/HowPage';
import NotFoundPage   from '../components/NotFound/NotFound';


export default (

  <Route name="app" component={App}>

    <Route name="main" path="/" component={MainPage} />

    <Route name="ivle" path="/ivle" component={IvlePage} />

    <Route name="chat" path="/chat" component={ChatPage} />

    <Route name="about" path="/about" component={AboutPage} />
    <Route name="privacy" path="/privacy" component={PrivacyPage} />
    <Route name="how" path="/how" component={HowPage} />
    <Route name="not-found" path="*" component={NotFoundPage} />

  </Route>

);
