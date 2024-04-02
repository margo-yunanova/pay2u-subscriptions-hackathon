import {
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';
import { CatalogPage } from '../pages/catalog-page';
import { HomePage } from '../pages/home-page';
import { MySubscriptionPage } from '../pages/my-subscription-page';
import { SubscriptionCardPage } from '../pages/subscription-card-page';
import { SubscriptionFormPage } from '../pages/subscription-form-page';
import './App.css';

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
        element: <Navigate to="/home" replace={true} />,
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
        element: <MySubscriptionPage />,
      },
      {
        path: 'form',
        element: <SubscriptionFormPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
