import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import  {AuthProvider}  from "./context/AuthContext";
import ShopContextProvider from "./context/ShopContext";
import { store, persistor } from "./redux/store";
import PropTypes from 'prop-types';


const AppProviders = ({ children }) => (
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ShopContextProvider>
            {children}
          </ShopContextProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

export default AppProviders;

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
