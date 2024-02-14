import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

function CardProducts({ data, showDetailProduct, addProductsToCart }) {
  const { cartProducts } = useContext(ShoppingCartContext);
  const renderIcon = (id) => {
    const isInCart = cartProducts.some((product) => product.id === id);

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 hover">
          <CheckIcon className="h-6 w-6 text-white "></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => addProductsToCart(data)}>
          <PlusIcon className="h-6 w-6 text-black hover:scale-[1.3] color-black"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-gray-200 cursor-pointer w-56 h-60 rounded-lg relative shadow-md mb-2"
      loading="lazy">
      {renderIcon(data.id)}
      <figure
        className="mb-2 w-full h-4/5"
        onClick={() => showDetailProduct(data)}>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images}
          alt={data.title}
          loading="lazy"
        />
        <span className="absolute bottom-12 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
}

export default CardProducts;
