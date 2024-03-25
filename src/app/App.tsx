import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home-page';
import './App.css';
import { popular, subscriptions } from '../pages/home-page/homeMock';
import { CatalogPage } from '../pages/catalog-page';
import { services } from '../pages/catalog-page/catalogMock';

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
    </Routes>
  );
}

export default App;
