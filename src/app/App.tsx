import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home-page';
import './App.css';
import { popular, subscriptions } from '../pages/home-page/homeMock';

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
    </Routes>
  );
}

export default App;
