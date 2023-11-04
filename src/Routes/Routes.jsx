import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { Login } from "../Pages/Login/Login.jsx";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
