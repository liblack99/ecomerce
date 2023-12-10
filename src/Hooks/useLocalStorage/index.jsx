import { useState } from "react";

function useLocalStorage() {
  const getItemFromLocalStorage = (name, defaultValue) => {
    const localStorageItem = localStorage.getItem(name);
    return localStorageItem ? JSON.parse(localStorageItem) : defaultValue;
  };

  const [account, setAccount] = useState(() =>
    getItemFromLocalStorage("account", {})
  );
  const [login, setLogin] = useState(() =>
    getItemFromLocalStorage("login", false)
  );

  const saveAccount = (newItem) => {
    localStorage.setItem("account", JSON.stringify(newItem));
    setAccount(newItem);
  };

  const handleLogin = (newValue) => {
    localStorage.setItem("login", JSON.stringify(newValue));
    setLogin(newValue);
  };

  return { account, saveAccount, login, handleLogin };
}
export default useLocalStorage;
