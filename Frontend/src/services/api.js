import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ?? "";

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { "Content-Type": "application/json" },
});

export const getProjects = () => api.get("/projects");
export const sendMessage = (data) => api.post("/contact", data);

export default api;
