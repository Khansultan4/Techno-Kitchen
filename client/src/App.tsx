import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import './app.css'

import HomePage from "./pages/HomePage/HomePage";
import Root from "./Root";
import Configurator from "./pages/ConfiguratorPage/ConfiguratorPage";

function App() {
  // const { user } = useAppSelector((state) => state.userSlice);



  const router = createBrowserRouter([
    {
      element: <Root />,
      path: "/",
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/configurator",
          element: <Configurator/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
