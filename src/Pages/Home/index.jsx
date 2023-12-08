/** @format */

import { useContext } from "react";
import CardProducts from "../../Component/CardProducts";
import Layout from "../../Component/Layout";
import Search from "../../Component/Search";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { products, handleSearch } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <Search handleSearch={handleSearch} />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-4">
        {products?.map((product) => (
          <CardProducts key={product.id} data={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
