import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import MainPage from '../components/main.js'

import Login from '../components/login'
import container from '../components/container'

const RouterConfig = (
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/container" component={container} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
)

export default RouterConfig
