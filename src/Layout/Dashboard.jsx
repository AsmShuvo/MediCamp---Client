// src/components/Dashboard.js
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useCamps from "../hooks/useCamps";
import { FaRegPenToSquare } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdAnalytics } from "react-icons/io";
import {
  MdAddBox,
  MdAdminPanelSettings,
  MdOutlinePayments,
} from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaAmbulance } from "react-icons/fa";
import { RxGear } from "react-icons/rx";
import { BsBuildingGear } from "react-icons/bs";
import { useAdmin } from "../hooks/useAdmin";

const Dashboard = () => {
  const [camps] = useCamps();
  const { isAdmin, loading } = useAdmin();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex  bg-secondary">
      <div className="min-h-screen">
        <div className="w-80 min-h-screen">
          <ul className="menu text-lg font-semibold">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    className="flex items-center gap-1"
                    to="adminProfile"
                  >
                    <MdAdminPanelSettings />
                    Organizers Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-1" to="addCamp">
                    <MdAddBox />
                    Add A Camp
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-1" to="manageCamps">
                    <RxGear />
                    Manage Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center gap-1"
                    to="manageRegistered"
                  >
                    <BsBuildingGear />
                    Manage Registered Camps
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="flex items-center gap-1" to="cart">
                    <FaRegPenToSquare />
                    Registered Camps{" "}
                    {/* <span className="rounded-full w-6 h-6 flex items-center justify-center bg-primary"></span> */}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-1" to="profile">
                    <CgProfile /> Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-1" to="/dashboard/analytics">
                    <IoMdAnalytics /> Analytics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center gap-1"
                    to="/dashboard/paymentHistory"
                  >
                    <MdOutlinePayments /> Payment History
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink className="MdOutlinePayments" to="/">
                <TiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/availableCamps">
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
