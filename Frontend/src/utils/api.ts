import axios from "axios";
import { getToken } from "./auth";

const API_BASE = "http://localhost:5000/api";
const USERS_API = "https://jsonplaceholder.typicode.com/users";

// Create axios instance with auth interceptor
const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Get all users from JSONPlaceholder
export const getUsers = async () => {
  const { data } = await axios.get(USERS_API);
  return data;
};

// Protected dashboard data
export const getDashboard = async () => {
  const { data } = await api.get("/dashboard");
  return data;
};
