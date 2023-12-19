import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function LogIn({ setView }) {
  const { account, handleLogin, formatPassword } =
    useContext(ShoppingCartContext);

  const isAccount = Object.keys(account).length === 0;

  return (
    <div className="flex flex-col w-80">
      <p>
        <span className="font-light text-sm">Email: </span>
        <span>{account.email}</span>
      </p>
      <p>
        <span className="font-light text-sm">Password: </span>
        <span>
          {account.password ? formatPassword(account.password) : null}
        </span>
      </p>
      <Link to="/">
        <button
          className="bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2"
          disabled={isAccount}
          onClick={() => handleLogin(true)}>
          Log in
        </button>
      </Link>
      <div className="text-center">
        <a className="font-light text-xs underline underline-offset-4" href="/">
          Forgot my password
        </a>
      </div>
      <button
        className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
        onClick={() => setView("create-user-info")}
        disabled={!isAccount}>
        Sign up
      </button>
    </div>
  );
}

export default LogIn;
