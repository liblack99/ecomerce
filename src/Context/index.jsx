import { createContext, useState } from "react";
import useProducts from "../Hooks/useProducts";
import useLocalStorage from "../Hooks/useLocalStorage";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [products, handleSearch, filterByCategories, loading] = useProducts();
  const { account, saveAccount, login, handleLogin } = useLocalStorage();
  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});
  const showDetailProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };
  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true), closeCheckoutMenu();
  };
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const openCheckoutMenu = () => {
    setIsCheckoutMenuOpen(true), closeProductDetail();
  };
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  const [count, setCount] = useState(cartProducts.length);

  const addProductsToCart = (product) => {
    const newProduct = { ...product, quantity: 1 };
    setCartProducts([...cartProducts, newProduct]);
    openCheckoutMenu();
    closeProductDetail();
    setCount(count + 1);
  };
  const deleteProductsToCart = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
    setCount(count - 1);
  };
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
  const clearCheckoutMenu = () => {
    const orderToAdd = {
      id: Date.now(),
      date: new Date().toLocaleDateString("es-CO"),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPriceToCart(cartProducts),
    };
    setCount(0);
    setOrders([...orders, orderToAdd]);
    setCartProducts([]);
  };

  const totalPriceToCart = (products) => {
    let total = 0;
    const prices = products.map((product) => product.price * product.quantity);
    const totalPrice = prices.reduce((acc, cur) => acc + cur, 0);
    total = totalPrice;
    return total;
  };
  // Shopping Cart · Order
  const [orders, setOrders] = useState([]);

  const formatPassword = (password) => {
    return "*".repeat(password.length);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        products,
        handleSearch,
        filterByCategories,
        productToShow,
        isProductDetailOpen,
        showDetailProduct,
        closeProductDetail,
        cartProducts,
        setCartProducts,
        addProductsToCart,
        deleteProductsToCart,
        clearCheckoutMenu,
        isCheckoutMenuOpen,
        openCheckoutMenu,
        closeCheckoutMenu,
        totalPriceToCart,
        increaseQuantity,
        decreaseQuantity,
        orders,
        account,
        saveAccount,
        login,
        handleLogin,
        formatPassword,
        loading,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartContext, ShoppingCartProvider };
