import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Search from './components/Search';

function App() {
  // Defining routes as an array of objects
  const routes = [
    { path: '/', element: <Home />, index: true },
    { path: '/collection', element: <Collection /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/product/:productId', element: <Product /> },
    { path: '/cart', element: <Cart /> },
    { path: '/login', element: <Login /> },
    { path: '/place-order', element: <PlaceOrder /> },
    { path: '/orders', element: <Order /> },
    { path: '/search', element: <Search/>},
  ];

  return (
    <Routes>
      {/* Define Layout as parent route */}
      <Route path="/" element={<Layout />}>
        {/* Dynamically render child routes */}
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
