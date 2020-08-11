import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './config/routes'

function StoreApp() {
  return (
    <Router>
      <Switch>
      {routes.map((route,i) => (
        <RoutesWithSubRoutes key={i} {...route} />
      ))}
      </Switch>
    </Router>
  );
}
 
const RoutesWithSubRoutes = (route) => {
 return (
   <Route
   path={route.path}
   exact={route.exact}
   render={props => <route.component  routes={route.routes} {...props}/>}
   />
 )
  

}


export default StoreApp;
