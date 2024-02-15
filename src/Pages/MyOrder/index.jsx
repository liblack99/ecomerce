import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Component/Layout";
import OrderCard from "../../Component/OrderCard";

function MyOrder() {
  const { orders } = useContext(ShoppingCartContext);
  const currentPath = window.location.hash.split("/").slice(2).join();
  const indexOrder = orders.findIndex((order) => currentPath == order.id);
  let index;
  if (currentPath === "last") {
    index = orders?.length - 1;
  } else {
    index = indexOrder;
  }
  console.log(currentPath);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-100">
        {orders?.[index]?.products.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
