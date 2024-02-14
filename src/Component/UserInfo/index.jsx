import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function UserInfo({ setView }) {
  const { account } = useContext(ShoppingCartContext);
  return (
    <div className="flex flex-col w-80">
      <p>
        <span className="font-light text-sm">Name: </span>
        <span>{account.name}</span>
      </p>
      <p>
        <span className="font-light text-sm">Email: </span>
        <span>{account.email}</span>
      </p>
      <button
        className="border border-black rounded-lg mt-6 py-3"
        onClick={() => setView("edit-user-info")}>
        Edit
      </button>
    </div>
  );
}

export default UserInfo;
