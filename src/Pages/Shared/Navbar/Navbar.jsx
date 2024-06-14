import React, { useContext } from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";
import useCarts from "./../../../hooks/useCart";
import { useAdmin } from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts, refetch] = useCarts();
  const { isAdmin, loading } = useAdmin();
  console.log(isAdmin);

  //console.log(carts);
  const myCarts = carts?.filter(
    (item) => item.participant_email == user?.email
  );
  return (
    <div className="">
      <div className="navbar bg-[#0007] fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-gray-500 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52"
            >
              <li className="text-xl font-semibold">
                <NavLink to="/">
                  HOME <IoIosArrowForward />
                </NavLink>
              </li>
              <li className="text-xl font-semibold">
                <NavLink to="/availableCamps">
                  AVAILABLE CAMPS <IoIosArrowForward />
                </NavLink>
              </li>
              <li className="text-xl font-semibold">
                <NavLink to="/reviews">
                  REVIEWS <IoIosArrowForward />
                </NavLink>
              </li>
              {!user && (
                <li className="text-xl font-semibold">
                  <NavLink to="/login">
                    JOIN US <IoIosArrowForward />
                  </NavLink>
                </li>
              )}
              {user && isAdmin && (
                <li className="text-xl font-semibold">
                  <NavLink className=" uppercase" to="/dashboard/adminHome">
                    Admin Home
                    <IoIosArrowForward />
                  </NavLink>
                </li>
              )}
              {user && !isAdmin && (
                <li className="text-xl font-semibold">
                  <NavLink className="uppercase" to="/dashboard/userHome">
                    User Home
                    <IoIosArrowForward />
                  </NavLink>
                </li>
              )}
              {!user && (
                <li className="text-xl font-semibold">
                  <NavLink className="" to="/login">
                    JOIN US <GrAdd />
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <FaHandHoldingMedical className="text-5xl bg-orange-700 text-primary rounded-bl-3xl rounded-br-3xl rounded-tl-3xl p-2" />
            <span className="self-center md:text-3xl font-extrabold whitespace-nowrap text-primary">
              MEDI<span className="text-secondary md:text-2xl">CAMP</span>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl font-semibold">
              <NavLink className="text-white" to="/">
                HOME <IoIosArrowForward />
              </NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink className="text-white" to="/availableCamps">
                AVAILABLE CAMPS <IoIosArrowForward />
              </NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink className="text-white" to="/reviews">
                REVIEWS <IoIosArrowForward />
              </NavLink>
            </li>
            {user && isAdmin && (
              <li className="text-xl font-semibold">
                <NavLink
                  className="text-white uppercase"
                  to="/dashboard/adminHome"
                >
                  Admin Home
                  <IoIosArrowForward />
                </NavLink>
              </li>
            )}
            {user && !isAdmin && (
              <li className="text-xl font-semibold">
                <NavLink
                  className="text-white uppercase"
                  to="/dashboard/userHome"
                >
                  User Home
                  <IoIosArrowForward />
                </NavLink>
              </li>
            )}
            {!user && (
              <li className="text-xl font-semibold">
                <NavLink className="text-white" to="/login">
                  JOIN US <GrAdd />
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* profile */}
        {user ? (
          <div className="navbar-end mr-6">
            <Link to="/dashboard/cart">
              {" "}
              <div className=" px-2 mr-2 bg-secondary rounded-md flex gap-2 items-center">
                <FaCartPlus /> {myCarts.length}
              </div>
            </Link>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard/profile">
                    <p className="justify-between">{user?.displayName}</p>
                  </Link>
                </li>
                <li onClick={logOut}>
                  <span className="text-red-600 text-lg font-semibold">
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="navbar-end mr-6">
              <div className="dropdown dropdown-end"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
