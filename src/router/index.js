import React, { Component } from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import routes from './routerConfig'

const routerMap = (routes) => {
    return routes.map((route, index) => {
        if (route.routes && route.routes.length) {
            return <Route key={index} path={route.path} render={() => 
                <route.component>
                  { routerMap(route.routes) }
                </route.component>
            }></Route>
        } else {
          if (route.auth) {
            return <Redirect key={index} to='/' />
          } else {
            return <Route key={index} path={route.path} render={props => <route.component {...props} />} />
          }
        }
    })
}

class Routers extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          { routerMap(routes) }
        </Switch>
      </HashRouter>
    );
  }
}

export default Routers;