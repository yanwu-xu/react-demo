import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

const containerPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/page/container').default)
  },'container')
}

const loginPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/page/login').default)
  },'login')
}

const mainPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/page/main').default)
  },'main')
}

const RouterConfig = (
  <Router history={hashHistory}>
    <Route path="/" getComponent={mainPage}>
      <IndexRoute getComponent={loginPage} />
      <Route path="/login" getComponent={loginPage} />
      <Route path="/container" getComponent={containerPage} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
)

export default RouterConfig


