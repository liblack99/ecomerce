import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import MyAccount from "../Pages/MyAccount";
import SignIn from "../Pages/SingIn";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

const Routes = () => {
  const { login } = useContext(ShoppingCartContext);

  let routes = useRoutes([
    {
      path: "/Ecomerce/",
      element: login ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/",
      element: login ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/clothes",
      element: login ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/electronics",
      element: login ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/furnitures",
      element: login ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/toys",
      element: login ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/others",
      element: login ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    { path: "/my-order/last", element: <MyOrder /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);

  return routes;
};
export default Routes;
