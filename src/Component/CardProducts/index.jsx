import React from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
function CardProducts({ data }) {
  const renderIcon = (id) => {
    const isInCart = false;
    //   context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg relative shadow-sm">
      {renderIcon(data.id)}
      <figure className="mb-2 w-full h-4/5">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images}
          alt={data.title}
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
