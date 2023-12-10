import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

function CheckoutMenu() {
  const {
    cartProducts,
    deleteProductsToCart,
    clearCheckoutMenu,
    closeCheckoutMenu,
    totalPriceToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ShoppingCartContext);

  return (
    <aside className="w-[460px] h-[calc(100vh-80px)] flex-col fixed z-10 right-0 border border-black rounded-lg bg-white overflow-y-scroll">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl ">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer hover:scale-[1.2]"
            onClick={() => closeCheckoutMenu()}></XMarkIcon>
        </div>
      </div>
      <div className="px-2">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            product={product}
            deleteProductsToCart={deleteProductsToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl w-[80px] text-center">
            ${totalPriceToCart(cartProducts)}
          </span>
        </p>
        <Link to="/my-order/last">
          <button
            className="bg-black py-3 text-white w-[400px] rounded-lg fixed bottom-5 hover:scale-[1.01] "
            onClick={() => clearCheckoutMenu()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutMenu;
