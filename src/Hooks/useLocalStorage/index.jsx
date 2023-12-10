import {useState} from "react";
function useLocalStorage(itemName, initialValue) {
  const getItemFromLocalStorage = (name, defaultValue) => {
    const localStorageItem = localStorage.getItem(name);
    return localStorageItem ? JSON.parse(localStorageItem) : defaultValue;
  };

  const [account, setAccount] = useState(() =>
    getItemFromLocalStorage(itemName, initialValue)
  );
  const [signIn, setSignIn] = useState(() =>
    getItemFromLocalStorage("sign-in", false)
  );

  const saveAccount = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setAccount(newItem);
  };

  const handleSignIn = (newValue) => {
    localStorage.setItem("sign-in", JSON.stringify(newValue));
    setSignIn(newValue);
  };

  return [account, saveAccount, signIn, handleSignIn];
}
export default useLocalStorage;
