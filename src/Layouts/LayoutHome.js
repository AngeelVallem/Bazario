import React from "react";
import {Route,Switch} from 'react-router-dom';
import Navbar from '../Components/home/Navbar'
//Destructuramos los props de las rutas hijas
const LayoutHome = ({routes}) => {
  console.log(routes);

  return (
    <div>
        {/*TO DO: NAVBAR */}
        <Navbar />
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
