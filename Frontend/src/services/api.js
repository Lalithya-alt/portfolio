import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

export const getProjects = () => api.get("/projects");
export const sendMessage = (data) => api.post("/contact", data);

export default api;
