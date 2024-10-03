import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';

import HomePage from './pages/HomePage/HomePage';
import Root from './Root';
import { fetchUser } from './redux/thunkActions';
import Configurator from './pages/ConfiguratorPage/ConfiguratorPage';
import MyConfigsPage from './pages/MyConfigPage/MyConfigsPage';
import AdminPage from './pages/AdminPage/AdminPAge';
import ConfigPage from "./pages/ConfigPage/ConfigPage";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const { user } = useAppSelector((state) => state.user);

  const router = createBrowserRouter([
    {
      element: <Root />,
      path: '/',
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/configurator',
          element: <Configurator />,
        },
        {
          path: '/myConfigs',
          element: <MyConfigsPage />,
        },
        {
          path: "/Config",
          element: <ConfigPage/>
        },
        {
          path: '/dashboard',
          element: <AdminPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
