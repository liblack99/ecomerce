/** @format */

import {useContext} from "react";
import CardProducts from "../../Component/CardProducts";
import Layout from "../../Component/Layout";
import Search from "../../Component/Search";
import {ShoppingCartContext} from "../../Context";
import ProductDetail from "../../Component/ProductDetails";

function Home() {
  const {
    products,
    handleSearch,
    showDetailProduct,
    closeProductDetail,
    productToShow,
    isProductDetailOpen,
    addProductsToCart,
  } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <Search handleSearch={handleSearch} />
      <div className="grid place-content-center grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-[90%] mt-4">
        {products?.map((product) => (
          <CardProducts
            key={product.id}
            data={product}
            showDetailProduct={showDetailProduct}
            addProductsToCart={addProductsToCart}
          />
        ))}
      </div>
      {isProductDetailOpen && (
        <ProductDetail
          productToShow={productToShow}
          closeProductDetail={closeProductDetail}
        />
      )}
    </Layout>
  );
}

export default Home;
