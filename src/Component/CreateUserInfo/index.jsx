import { Link, Navigate } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function CreateUserInfo() {
  const { saveAccount, handleLogin, account } = useContext(ShoppingCartContext);
  const form = useRef(null);
  const isAccount = Object.keys(account).length === 0;

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    if (data.name !== "" && data.email !== "" && data.password !== "") {
      saveAccount(data);
      handleLogin(true);
    }
  };
  return (
    <form ref={form} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-light text-sm">
          Your name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue=""
          placeholder="Peter"
          className="rounded-lg border border-black placeholder:font-light
              placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-light text-sm">
          Your email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue=""
          placeholder="hi@helloworld.com"
          className="rounded-lg border border-black
              placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-light text-sm">
          Your password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue=""
          placeholder="******"
          className="rounded-lg border border-black
              placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <button
        className="bg-black text-white w-full rounded-lg py-3"
        onClick={() => createAnAccount()}>
        Create
      </button>
      {!isAccount && <Navigate replace to={"/"} />}
    </form>
  );
}

export default CreateUserInfo;
