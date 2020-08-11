// Layouts Home
import LayoutHome from "../Layouts/LayoutHome";

//Pages Home
import HomePage from "../Pages/HomeP/Home";
import StoresPage from "../Pages/HomeP/Stores";
import LoginPage from "../Pages/HomeP/Login";
import RegisterPage from "../Pages/HomeP/Register";


//Other
import Error404 from '../Pages/Error404';

//declarando mis rutas
const routes = [
  {
    path: "/",
    component: LayoutHome,
    exact: false,
    //routes seran nuestras rutas hijas, osea las paginas que se van a renderizar con nuestro layut
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
      },
      {
        path: "/stores",
        component: StoresPage,
        exact: true,
      },
      {
        path: "/login",
        component: LoginPage,
        exact: true,
      },
      {
        path: "/register",
        component: RegisterPage,
        exact: true,
      },
      {
          component: Error404,
      }
    ]
  },
];


export default routes;