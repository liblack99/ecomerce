import { useEffect } from "react";
import { useState } from "react";
import getData from "../../Services/getData";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getData(text);

        setProducts(apiData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [text]);

  const handleSearch = (inputTitle) => {
    setText(inputTitle);
  };

  return [products, handleSearch];
}

export default useProducts;
