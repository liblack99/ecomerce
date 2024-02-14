import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import MyAccount from "../Pages/MyAccount";
import SignIn from "../Pages/SingIn";
import AuthRouter from "../AuthRouter";

const Routes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <AuthRouter>
          <Home />
        </AuthRouter>
      ),
    },
    {
      path: "/clothes",
      element: (
        <AuthRouter>
          <Home />
        </AuthRouter>
      ),
    },
    {
      path: "/electronics",
      element: (
        <AuthRouter>
          <Home />
        </AuthRouter>
      ),
    },
    {
      path: "/furniture",
      element: (
        <AuthRouter>
          <Home />
        </AuthRouter>
      ),
    },
    {
      path: "/toys",
      element: (
        <AuthRouter>
          <Home />
        </AuthRouter>
      ),
    },
    {
      path: "/others",
      element: (
        <AuthRouter>
          <Home />
        </AuthRouter>
      ),
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
