import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import MyAccount from "../Pages/MyAccount";
import SignIn from "../Pages/SingIn";
import AuthRouter from "../AuthRouter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRouter>
            <Home />
          </AuthRouter>
        }
      />
      <Route
        path="/clothes"
        element={
          <AuthRouter>
            <Home />
          </AuthRouter>
        }
      />
      <Route
        path="/electronics"
        element={
          <AuthRouter>
            <Home />
          </AuthRouter>
        }
      />
      <Route
        path="/furniture"
        element={
          <AuthRouter>
            <Home />
          </AuthRouter>
        }
      />
      <Route
        path="/toys"
        element={
          <AuthRouter>
            <Home />
          </AuthRouter>
        }
      />
      <Route
        path="/others"
        element={
          <AuthRouter>
            <Home />
          </AuthRouter>
        }
      />
      <Route path="/my-order/last" element={<MyOrder />} />
      <Route path="/my-order/:id" element={<MyOrder />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
