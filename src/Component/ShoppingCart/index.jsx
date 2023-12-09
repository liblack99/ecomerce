import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ShoppingCart = () => {
  const { count, openCheckoutMenu } = useContext(ShoppingCartContext);
  return (
    <div
      className="relative flex gap-0.5 items-center"
      onClick={() => openCheckoutMenu()}>
      <ShoppingCartIcon className="w-6 h-6 fill-none stroke-black cursor-pointer" />
      <div
        className="absolute bottom-4 left-5 flex justify-center items-center
      rounded-full bg-black w-4 h-4 text-xs text-white">
        {count}
      </div>
    </div>
  );
};

export default ShoppingCart;
