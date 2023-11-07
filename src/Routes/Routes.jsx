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
import { Helmet } from "react-helmet";
import { ManageSingleFood } from "../Pages/Manage Food/ManageSingleFood.jsx";
import { UpdateFood } from "../Pages/Manage Food/UpdateFood.jsx";
import { MyFoodRequest } from "../Pages/My Food Request/MyFoodRequest.jsx";
import { ErrorPage } from "../Pages/Error/ErrorPage.jsx";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/available/food",
          element: <AvailableFood />,
        },
        {
          path: "/add/food",
          element: (
            <PrivateRoute>
              <AddFood />
            </PrivateRoute>
          ),
        },
        {
          path: "/manage/food",
          element: (
            <PrivateRoute>
              <ManageFood />
            </PrivateRoute>
          ),
        },
        {
          path: "/donation/food/:id",
          element: (
            <PrivateRoute>
              <AvailableSingleFood />
            </PrivateRoute>
          ),
        },
        {
          path: "/donation/food/manage/:id",
          element: (
            <PrivateRoute>
              <ManageSingleFood />
            </PrivateRoute>
          ),
        },
        {
          path: "/donation/update/:id",
          element: (
            <PrivateRoute>
              <UpdateFood />
            </PrivateRoute>
          ),
        },
        {
          path: "/donation/myRequest",
          element: (
            <PrivateRoute>
              <MyFoodRequest />
            </PrivateRoute>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
