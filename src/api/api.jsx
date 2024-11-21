import axios from "./axios"; // Pastikan path ini sesuai dengan lokasi axios.js
import Cookies from "js-cookie";

// Fungsi login
export const login = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", { username, password });
    Cookies.set("token", response.data.data.token, { expires: 1 }); // Simpan token dengan masa aktif 1 hari
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Fungsi logout
export const logout = async () => {
  try {
    await axios.post("/auth/logout");
    Cookies.remove("token"); // Hapus token dari cookies
  } catch (error) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
};

// URL endpoint untuk fetch statistik
const API_URL = "http://localhost:8000/api/landing-page"; // Pastikan backend Anda mendukung endpoint ini

// Fungsi fetch statistik untuk landing page
export const fetchStats = async () => {
  try {
    const response = await axios.get(API_URL); // Menggunakan Axios untuk GET request
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch stats");
  }
};
