import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../pages/catalog-page';
import { services } from '../pages/catalog-page/catalogMock';
import { HomePage } from '../pages/home-page';
import { popular, subscriptions } from '../pages/home-page/homeMock';
import { SubscriptionCardPage } from '../pages/subscription-card-page';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <HomePage
            popularSubscriptions={popular}
            mySubscriptionsCard={subscriptions}
          />
        }
      />
      <Route path="/catalog" element={<CatalogPage catalogCard={services} />} />
      <Route
        path="/catalog/:title"
        element={<SubscriptionCardPage service={services[8]} />}
      />
    </Routes>
  );
}

export default App;
