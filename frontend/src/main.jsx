import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </PersistGate>
  </Provider>
</BrowserRouter>
);
