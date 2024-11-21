import axios from "axios";
import Cookies from "js-cookie";
import { HOST_API } from "../config-global";

const axiosInstance = axios.create({
  baseURL: HOST_API,
  withCredentials: "true",
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// Tambahkan token JWT ke header jika ada
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

export const endpoints = {
  auth: {
    login: "/api/auth/login",
    logout: "/api/auth/logout",
  },
};
