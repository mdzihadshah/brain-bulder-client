import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveRoute/ActiveLink";
import { AuthContest } from "../../../Provider/AuthProvider";
import logo from "../../../../public/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContest);

  const navItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/alltoy">All Toy</ActiveLink>
      </li>

      {user && (
        <>
          <li>
            <ActiveLink to="/mytoy">My Toy</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/addtoy">Add Toy</ActiveLink>
          </li>
        </>
      )}
      <li>
        <Link to="/">BLog</Link>
      </li>
    </>
  );
  return (
    <div className="bg-lime-00 py-5 ">
      <div class="navbar w-11/12 mx-auto ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
              {navItems}
              {user && (
                <li>
                  <button
                    onClick={logOut}
                    class="btn rounded-full mt-1 text-white border-0 bg-green-500 ">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <img class="lg:w-64 w-52" src={logo} alt="" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div class="navbar-end ">
          {user ? (
            <>
              <img
                title={user?.displayName}
                className="w-14 h-14 rounded-full mr-4"
                src={user?.photoURL}
                alt="User pictre"
              />
              <button
                onClick={logOut}
                class="btn rounded-full hidden lg:block border-0 bg-green-500 px-8">
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              class="btn rounded-full border-0 bg-green-500 px-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
