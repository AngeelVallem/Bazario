import React from "react";
import {Route,Switch} from 'react-router-dom'
//Destructuramos los props de las rutas hijas
const LayoutHome = ({routes}) => {
  console.log(routes);

  return (
    <div>
        {/*TO DO: NAVBAR */}
        <nav>NavBar</nav>
        {/* TO DO: CONTENT STYLES */}
        <div>

          <LoadRoutes routes={routes}/>

        </div>
        {/* TO DO: FOOTER */}
        <footer>
          Soy el footer
        </footer>
    </div>
  );
};


const LoadRoutes = ({routes}) =>{ 

return (
  <Switch>
{routes.map((route,i) => (
  <Route
    key={i}
    path={route.path}
    exact={route.exact}
    component={route.component}
    />
))
}
  </Switch>
)



}

export default LayoutHome;
