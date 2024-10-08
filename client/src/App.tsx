import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import './App.css'
import HomePage from './pages/HomePage/HomePage';
import Root from './Root';
import { fetchUser } from './redux/thunkActions';
import Configurator from './pages/ConfiguratorPage/ConfiguratorPage';
import AdminPage from './pages/AdminPage/AdminPage';
import MyConfigsPage from './pages/MyConfigPage/MyConfigsPage';
import ConfigPage from './pages/ConfigPage/ConfigPage';
import ConfigsPage from './pages/ConfigsPage/ConfigsPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  console.log('122', user);
  

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
          path: '/configs',
          element: <ConfigsPage />,
        },
        {
          path: '/myConfigs',
          element: <MyConfigsPage />,
        },
        {
          path: '/Config/:id',
          element: <ConfigPage />,
        },
        {
          path: '/dashboard',
          element: ( <ProtectedRoute authUser = {user.login} redirectTo="/">
            <AdminPage />
            </ProtectedRoute>),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
