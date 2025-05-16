import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import SearchPage from "./pages/SearchPage";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./utils/toast.css";

function App() {
  const routes = [
    { path: "/", element: <Home />, index: true },
    { path: "/collection", element: <Collection /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/product/:productId", element: <Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/login", element: <Login /> },
    { path: "/placeorder", element: <PlaceOrder /> },
    { path: "/orders", element: <Order /> },
    { path: "/search", element: <SearchPage /> },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>

      {/* Add the ToastContainer at the root level */}
      <ToastContainer
        limit={3}
        newestOnTop
        transition={Slide}
        closeButton={false}
      />
    </>
  );
}

export default App;
