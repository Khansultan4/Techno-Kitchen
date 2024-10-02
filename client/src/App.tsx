import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";


import HomePage from "./pages/HomePage/HomePage";
import Root from "./Root";

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
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
