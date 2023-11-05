import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { Login } from "../Pages/Login/Login.jsx";
import { Register } from "../Pages/Register/Register.jsx";
import { AvailableFood } from "../Pages/Available food/AvailableFood.jsx";
import { AddFood } from "../Pages/Add Food/AddFood.jsx";
import { ManageFood } from "../Pages/Manage Food/ManageFood.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import { AvailableSingleFood } from "../Pages/Available food/AvailableSingleFood.jsx";
import { PrivateRoute } from "../Component/Private Route/PrivateRoute.jsx";
import { PrivateLoginRoute } from "../Component/Private Route/PrivateLoginRoute.jsx";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: (
            <PrivateLoginRoute>
              <Login />
            </PrivateLoginRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <PrivateLoginRoute>
              <Register />
            </PrivateLoginRoute>
          ),
        },
        {
          path: "/available/food",
          element: <AvailableFood />,
        },
        {
          path: "/add/food",
          element: (
            <PrivateRoute>
              {" "}
              <AddFood />
            </PrivateRoute>
          ),
        },
        {
          path: "/manage/food",
          element: (
            <PrivateRoute>
              {" "}
              <ManageFood />
            </PrivateRoute>
          ),
        },
        {
          path: "/donation/food/:id",
          element: (
            <PrivateRoute>
              {" "}
              <AvailableSingleFood />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
