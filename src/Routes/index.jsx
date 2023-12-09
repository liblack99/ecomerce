import {useRoutes} from "react-router-dom";
import Home from "../Pages/Home";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";

const Routes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home />},
    // { path: '/clothes', element: <Home /> },
    // { path: '/electronics', element: <Home /> },
    // { path: '/furnitures', element: <Home /> },
    // { path: '/toys', element: <Home /> },
    // { path: '/othes', element: <Home /> },
    // { path: '/my-account', element: <MyAccount /> },
    {path: "/my-order/last", element: <MyOrder />},
    {path: "/my-order/:id", element: <MyOrder />},
    {path: "/my-orders", element: <MyOrders />},
    // { path: '/sign-in', element: <SignIn /> },
    // { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};
export default Routes;
