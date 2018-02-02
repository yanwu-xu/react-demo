import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

const containerPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('../components/container').default)
  },'container')
}

const loginPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('../components/login').default)
  },'login')
}

const mainPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('../components/main').default)
  },'main')
}

const aaPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('../components/aa').default)
  },'aa')
}

const bbPage = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('../components/bb').default)
  },'bb')
}

const RouterConfig = (
  <Router history={hashHistory}>
    <Route path="/" getComponent={mainPage} />
    <Route path="/main" getComponent={mainPage}>
      <IndexRoute getComponent={loginPage} />
      <Route path="/login" getComponent={loginPage} />
      <Route path="/container" getComponent={containerPage} />
      <Redirect from="*" to="/" />
    </Route>
    <Route path="/aa" getComponent={aaPage} />
    <Route path="/bb" getComponent={bbPage} />
  </Router>
)

export default RouterConfig


