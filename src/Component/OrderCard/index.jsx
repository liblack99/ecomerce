import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard({
  product,
  deleteProductsToCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-3">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product.images}
            alt={product.title}
          />
        </figure>
        <p className="text-sm font-light min-w-[220px]">{product.title}</p>
      </div>
      {decreaseQuantity && increaseQuantity ? (
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
            disabled={true}
            value={product.quantity}
          />
          <input
            type="button"
            value="+"
            className="flex items-center justify-center w-[20px]  border border-black text-white bg-black"
            onClick={() => increaseQuantity(product.id)}
          />
        </div>
      ) : (
        <div className="text-center w-[20px] border border-black rounded-md">
          {product.quantity}
        </div>
      )}

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium w-[60px] text-center">
          ${product.price * product.quantity}
        </p>
        {deleteProductsToCart && (
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => deleteProductsToCart(product.id)}></XMarkIcon>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
