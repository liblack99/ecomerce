import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function OrderCard({ product, deleteProductsToCart }) {
  const { cartProducts, setCartProducts } = useContext(ShoppingCartContext);

  const decreaseQuantity = (id) => {
    const index = cartProducts.findIndex((product) => product.id === id);
    if (index !== -1 && cartProducts[index].quantity > 1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[index].quantity = cartProducts[index].quantity - 1;
      setCartProducts(updatedCartProducts);
    }
  };

  const increaseQuantity = (id) => {
    const index = cartProducts.findIndex((product) => product.id === id);
    if (index !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[index].quantity = cartProducts[index].quantity + 1;
      setCartProducts(updatedCartProducts);
    }
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product.images}
            alt={product.title}
          />
        </figure>
        <p className="text-sm font-light min-w-[160px]">{product.title}</p>
      </div>
      <div className="flex w-[60px] ">
        <input
          type="button"
          value="-"
          className="flex items-center justify-center w-[20px] border border-black text-white bg-black"
          onClick={() => decreaseQuantity(product.id)}
        />
        <input
          className="text-center no-spinner w-[20px] outline-none border border-black"
          type="number"
          value={product.quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <input
          type="button"
          value="+"
          className="flex items-center justify-center w-[20px]  border border-black text-white bg-black"
          onClick={() => increaseQuantity(product.id)}
        />
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium w-[60px] text-center">
          ${product.price * product.quantity}
        </p>
        {
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => deleteProductsToCart(product.id)}></XMarkIcon>
        }
      </div>
    </div>
  );
}

export default OrderCard;
