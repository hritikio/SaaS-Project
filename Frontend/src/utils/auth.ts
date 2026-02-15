import axios from "axios";

const API = "http://localhost:5000/api";

export const login = async (email: string, password: string) => {
  const { data } = await axios.post(`${API}/auth/login`, { email, password });
  if (data.token) localStorage.setItem("token", data.token);
  return data;
};

export const signup = async (email: string, password: string) => {
  const { data } = await axios.post(`${API}/auth/signup`, { email, password });
  if (data.token) localStorage.setItem("token", data.token);
  return data;
};

export const logout = () => localStorage.removeItem("token");

export const isAuth = () => !!localStorage.getItem("token");

export const getToken = () => localStorage.getItem("token");
