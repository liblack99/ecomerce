import { createContext, useState } from "react";
import useProducts from "../Hooks/useProducts";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // My account
  const [products, handleSearch] = useProducts();
  const [account, setAccount] = useState({});

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  const showDetailProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };
  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  const productsQuantity = () => {
    setAccount(count + 1);
  };

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        products,
        handleSearch,
        productToShow,
        showDetailProduct,
        closeProductDetail,

        productsQuantity,

        isProductDetailOpen,

        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
        account,
        setAccount,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartContext, ShoppingCartProvider };
