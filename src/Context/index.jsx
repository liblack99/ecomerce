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

  // Checkout Side Menu · Open/Close
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
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
    setAccount(count - 1);
  };
  const clearCheckoutMenu = () => {
    const orderToAdd = {
      Id: Date.now(),
      date: new Date().toLocaleDateString("es-CO"),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPriceToCart(cartProducts),
    };

    setCount(0);
    setOrder([...order, orderToAdd]);
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
