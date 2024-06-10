import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import RegisterForm from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Camps from "../Pages/Camps/Camps";
import CampDetails from "../Pages/CampDetails/CampDetails";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/Dashboard/Cart/Cart";
import Profile from "../Pages/DashBoard/Profile/Profile";
import AdminProfile from "../Pages/DashBoard/Profile/AdminProfile";
import AddCamp from "./../Pages/DashBoard/AddItems/AddItems";
import ManageCamps from "../Pages/DashBoard/ManageCamps/ManageCamps";
import UpdateCamp from "../Pages/DashBoard/UpdateCamp/UpdateCamp";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/availableCamps",
        element: <Camps />,
      },
      {
        path: "/camp-details/:id",
        element: (
          <PrivateRoute>
            <CampDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "adminProfile",
        element: (
          <PrivateRoute>
            <AdminProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "addCamp",
        element: <AddCamp />,
      },
      {
        path: "manageCamps",
        element: <ManageCamps />,
      },
      {
        path: "/dashboard/campUpdate/:id",
        element: <UpdateCamp />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/userHome",
        element: <UserHome />,
      },
      {
        path: "/dashboard/adminHome",
        element: <AdminHome />,
      },
    ],
  },
]);
