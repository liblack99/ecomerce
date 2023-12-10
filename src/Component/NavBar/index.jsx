import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {ShoppingCartContext} from "../../Context";
import ShoppingCart from "../ShoppingCart";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const {filterByCategories} = useContext(ShoppingCartContext);

  const isAccount = true;
  const renderView = () => {
    if (isAccount) {
      return (
        <>
          <li className="text-black/60">"example"</li>
          <li>
            <NavLink
              to="/my-orders"
              className={({isActive}) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({isActive}) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({isActive}) => (isActive ? activeStyle : undefined)}
            >
              Sign out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({isActive}) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white shadow-sm">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink onClick={() => filterByCategories()}>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? activeStyle : undefined)}
            onClick={() => filterByCategories()}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({isActive}) => (isActive ? activeStyle : undefined)}
            onClick={() => filterByCategories("clothe")}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({isActive}) => (isActive ? activeStyle : undefined)}
            onClick={() => filterByCategories("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({isActive}) => (isActive ? activeStyle : undefined)}
            onClick={() => filterByCategories("furnitures")}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({isActive}) => (isActive ? activeStyle : undefined)}
            onClick={() => filterByCategories("toys")}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({isActive}) => (isActive ? activeStyle : undefined)}
            onClick={() => filterByCategories("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderView()}
        <li className="flex items-center">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
