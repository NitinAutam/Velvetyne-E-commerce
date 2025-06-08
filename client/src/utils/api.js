import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api",
  withCredentials: true,
});

export default api;
// // 🔐 Global response interceptor
// api.interceptors.response.use(
//   res => res,
//   err => {
//     if (err.response?.status === 401) {
//       // Expected auth failure, handle silently
//       // For example, trigger logout state update here
//       // Avoid console.error or console.log here in production
//     } else {
//       console.error("Unexpected API error:", err);
//     }
//     return Promise.reject(err);
//   }
// );


