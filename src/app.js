import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
//import router from './router/router.js'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import MainPage from './components/main.js'
import Login from './components/login'
import container from './components/container'
import aa from './components/aa'

render(
  <Provider>
    <Router history={hashHistory}>
      <Route path="/" component={MainPage}>
        <IndexRoute component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/container" 
              getComponent={(location, cb) => {
                require.ensure([], require => {
                    cb(null, require('./components/container').default)
                },'container')
        }} />
        <Redirect from="*" to="/" />
      </Route>
      <Route path="/aa" 
              getComponent={(location, cb) => {
                require.ensure([], require => {
                    cb(null, require('./components/aa').default)
                },'aa')
      }} />
    </Router>
  </Provider>,
  document.getElementById('app'),
)

