import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Redirect from="*" to="/" />
  </Router>
);
