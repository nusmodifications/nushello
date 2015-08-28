import React from 'react';
import { Route, Redirect, DefaultRoute, NotFoundRoute } from 'react-router';

// Pages
import AppContainer from 'views/app-container.jsx';

import NotFoundPage from 'views/not-found-page.jsx';
import NotImplementPage from 'views/not-implement-page.jsx';

import LoginPage from 'views/login-page/login-page.jsx';
import ChatPage from 'views/chat-page/chat-page.jsx';
import MatchesPage from 'views/matches-page/matches-page.jsx';
import PrefsPage from 'views/prefs-page/prefs-page.jsx';
import ProfilePage from 'views/profile-page/profile-page.jsx';
import RegisterPage from 'views/register-page/register-page.jsx';
import AboutPage from 'views/about-page/about-page.jsx';
import PrivacyPage from 'views/privacy-page/privacy-page.jsx';
import HowPage from 'views/how-page/how-page.jsx';

var routes = (
  <Route name="home" path="APP_ROOT" handler={AppContainer}>
    <DefaultRoute handler={LoginPage}/>

    <Route name="ivle" path="/ivle" handler={NotImplementPage} />

    <Route name="profile" path="/profile" handler={ProfilePage} />
    <Route name="register" path="/register" handler={RegisterPage} />
    <Route name="prefs" path="/prefs" handler={PrefsPage} />
    <Route name="matches" path="/matches" handler={MatchesPage} />
    <Route name="chat" path="/chat" handler={ChatPage} />

    <Route name="about" path="/about" handler={AboutPage}/>
    <Route name="privacy" path="/privacy" handler={PrivacyPage}/>
    <Route name="how" path="/how" handler={HowPage}/>

    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);

export default routes;
