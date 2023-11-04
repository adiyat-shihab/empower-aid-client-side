import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { Login } from "../Pages/Login/Login.jsx";
import { Register } from "../Pages/Register/Register.jsx";
import { AvailableFood } from "../Pages/Available food/AvailableFood.jsx";
import { AddFood } from "../Pages/Add Food/AddFood.jsx";
import { ManageFood } from "../Pages/Manage Food/ManageFood.jsx";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/available/food",
          element: <AvailableFood />,
        },
        {
          path: "/add/food",
          element: <AddFood />,
        },
        {
          path: "/manage/food",
          element: <ManageFood />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
