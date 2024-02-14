import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { Navigate } from "react-router-dom";

function AuthRouter({ children }) {
  const { login } = useContext(ShoppingCartContext);

  if (!login) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}

export default AuthRouter;
