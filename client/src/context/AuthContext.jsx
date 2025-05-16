import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
  showSuccess,
  showError,
  showInfo,
  showWarning,
} from "../utils/toastUtils";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/userVerify", {
          method: "GET",
          credentials: "include", // Sends the cookie
        });

        const data = await res.json();
        if (res.ok && data.loggedIn) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = () => {
    setLoggedIn(true); // No need to store token
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
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
  //AuthProvider.propTypes – attaches prop type validation to the component.
  children: PropTypes.node.isRequired, //enforces that children must be a valid renderable React node (e.g., JSX, string, number, element) and is required.
};
