'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();


import { FontIcon } from 'material-ui';


import './app.less';

class App extends React.Component {
  render(){
    return (
      <section id="main">
        <header className="siteHeader">
          <h1>
            <span>Captain</span><span className="thin">Hook</span>
            <FontIcon color="#FF5722" className="main_icon material-icons">flight_takeoff</FontIcon>
          </h1>
          <nav className="nav">
          </nav>
        </header>
        <section className="content">
          { this.props.children }
        </section>
        <footer className="mainFooter">
          Made with &hearts;
        </footer>
      </section>
    );
  }
}


const loadAbout = (l, cb) => require.ensure(['./about/index.js'], () => cb(null, require('./about/index.js')))
const loadCreateHook = (l, cb) => require.ensure(['./createhook/index.js'], () => cb(null, require('./createhook/index.js')))

React.render(
  <Router>
    <Route path="/" component={ App }>
      <IndexRoute getComponent={ loadCreateHook } />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
, document.getElementById('win'));

      //<Route path="/about" getComponent={ loadAbout } />
