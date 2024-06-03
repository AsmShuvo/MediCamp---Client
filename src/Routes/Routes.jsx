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
    ],
  },
]);
