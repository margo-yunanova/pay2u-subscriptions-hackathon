import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';
import { CatalogPage } from '../pages/catalog-page';
import { HomePage } from '../pages/home-page';
import { MySubscriptionsPage } from '../pages/my-subscriptions-page';
import { SubscriptionCardPage } from '../pages/subscription-card-page';
import { SubscriptionFormPage } from '../pages/subscription-form-page';
import './App.css';
import { ChangeTariffPage } from '../pages/change-tariff-page';
import { SetUpPage } from '../pages/set-up-page';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { themes } from './themes/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <SetUpPage />,
      },

      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: 'catalog/:id',
        element: <SubscriptionCardPage />,
      },
      {
        path: 'mysubscriptions',
        element: <MySubscriptionsPage />,
      },
      {
        path: 'form',
        element: <SubscriptionFormPage />,
      },
      { path: 'change-tariff/:id', element: <ChangeTariffPage /> },
    ],
  },
]);

const App = () => {
  const themeName = useSelector((state: RootState) => state.theme.theme);
  const theme = themes[themeName as keyof typeof themes] ?? themes.default;
  return (
    <ThemeProvider theme={() => theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
