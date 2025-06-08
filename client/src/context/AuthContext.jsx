import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { showSuccess, showError } from "../utils/toastUtils";
import api from "../utils/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
  const checkAuth = async () => {
    try {
      const { data } = await api.get("/auth/userVerify");
      setLoggedIn(data.loggedIn || false);
    } catch (err) {
      if (err.response?.status === 401) {
        setLoggedIn(false);
      } else {
        console.error("Unexpected auth check error:", err);
      }
    }
  };

  checkAuth();
}, []);



  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      const { status } = await api.post("/auth/logout");
      if (status === 200) {
        setLoggedIn(false);
        showSuccess("Logged out successfully");
      } else {
        showError("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
      showError("Logout error");
    }
  };

  const value = {
    loggedIn,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
