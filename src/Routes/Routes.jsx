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
import ManageRegisteredCamps from "../Pages/DashBoard/ManageRegisteredCamps/ManageRegisteredCamps";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Stats from "../Pages/DashBoard/Dashboard/Stats/Stats";
import Reviews from "./../Pages/Reviews/Reviews";
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
        path: "/reviews",
        element: <Reviews />,
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
          <AdminPrivateRoute>
            <AdminProfile />{" "}
          </AdminPrivateRoute>
        ),
      },
      {
        path: "addCamp",
        element: (
          <AdminPrivateRoute>
            <AddCamp />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageCamps",
        element: (
          <AdminPrivateRoute>
            <ManageCamps />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/campUpdate/:id",
        element: (
          <AdminPrivateRoute>
            <UpdateCamp />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/userHome",
        element: (
          <PrivateRoute>
            <UserHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/adminHome",
        element: (
          <AdminPrivateRoute>
            <AdminHome />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/analytics",
        element: (
          <PrivateRoute>
            <Stats />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manageRegistered",
        element: (
          <AdminPrivateRoute>
            <ManageRegisteredCamps />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/analytics",
        element: (
          <PrivateRoute>
            <Stats />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
