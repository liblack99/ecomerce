import {useRoutes} from "react-router-dom";
import Home from "../Pages/Home";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import MyAccount from "../Pages/MyAccount";
import SignIn from "../Pages/SIngIn";
const Routes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home />},
    {path: "/clothes", element: <Home />},
    {path: "/electronics", element: <Home />},
    {path: "/furnitures", element: <Home />},
    {path: "/toys", element: <Home />},
    {path: "/others", element: <Home />},
    {path: "/my-order/last", element: <MyOrder />},
    {path: "/my-order/:id", element: <MyOrder />},
    {path: "/my-orders", element: <MyOrders />},
    {path: "/my-account", element: <MyAccount />},
    {path: "/sign-in", element: <SignIn />},
  ]);

  return routes;
};
export default Routes;
