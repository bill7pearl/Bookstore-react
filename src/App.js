import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import Categories from './components/categoriesPage';
import Navigation from './components/Header';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
