import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';
import { CatalogPage } from '../pages/catalog-page';
import { services } from '../pages/catalog-page/catalogMock';
import { HomePage } from '../pages/home-page';
import { popular, subscriptions } from '../pages/home-page/homeMock';
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
        path: 'home',
        element: (
          <HomePage
            popularSubscriptions={popular}
            mySubscriptionsCard={subscriptions}
          />
        ),
      },
      {
        path: 'catalog',
        element: <CatalogPage catalogCard={services} />,
      },
      {
        path: 'catalog/:title',
        element: <SubscriptionCardPage service={services[8]} />,
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
