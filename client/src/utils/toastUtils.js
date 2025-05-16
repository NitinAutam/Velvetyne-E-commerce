// utils/toastUtils.js
import { toast } from "react-toastify";

const baseConfig = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored", // or "light" for clean look
};

export const showSuccess = (msg) =>
  toast.success(msg || "Success", {
    ...baseConfig,
    className: "toast-success",
  });

export const showError = (msg) =>
  toast.error(msg || "Something went wrong", {
    ...baseConfig,
    className: "toast-error",
  });

export const showInfo = (msg) =>
  toast.info(msg || "FYI", {
    ...baseConfig,
    className: "toast-info",
  });

export const showWarning = (msg) =>
  toast.warn(msg || "Warning", {
    ...baseConfig,
    className: "toast-warning",
  });
