import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useCamps from "../hooks/useCamps";
import { FaRegPenToSquare } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaAmbulance } from "react-icons/fa";

const Dashboard = () => {
  const [camps] = useCamps();
  return (
    <div className="flex">
      <div className="min-h-screen">
        <div className="w-64 min-h-screen bg-secondary">
          <ul className="menu text-lg font-semibold">
            <li>
              <NavLink className="flex items-center gap-1" to="cart">
                <FaRegPenToSquare />
                Registerd Camps{" "}
                {/* <span className="rounded-full w-6 h-6 flex items-center justify-center bg-primary"></span> */}
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-1" to="profile">
                <CgProfile /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-1" to="analytics">
                <IoMdAnalytics /> Analytics
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-1" to="paymentHistory">
                <MdOutlinePayments /> Payment History
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink className="MdOutlinePayments" to="/">
                <TiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/camps">
                <FaAmbulance /> All Camps
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 text-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
