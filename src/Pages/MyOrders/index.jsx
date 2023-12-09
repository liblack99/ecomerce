import {useContext} from "react";
import {Link} from "react-router-dom";
import Layout from "../../Component/Layout";
import {ShoppingCartContext} from "../../Context";
import OrdersCard from "../../Component/OrdersCard";

function MyOrders() {
  const {orders} = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {orders.map((order) => (
        <Link key={order.id} to={`/my-order/${order.id}`}>
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
