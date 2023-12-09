import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CheckoutMenu from "../CheckoutMenu";
function Layout({ children }) {
  const { isCheckoutMenuOpen } = useContext(ShoppingCartContext);

  return (
    <div className="flex flex-col items-center mt-20">
      {isCheckoutMenuOpen && <CheckoutMenu />}
      {children}
    </div>
  );
}

export default Layout;
