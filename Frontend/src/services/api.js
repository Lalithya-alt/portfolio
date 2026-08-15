import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ?? "";

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { "Content-Type": "application/json" },
  timeout: 60000, // 60s — allows time for Render free-tier cold start
});

export const getProjects = () => api.get("/projects");
export const sendMessage = (data) => api.post("/contact", data);

/**
 * Pings the backend health endpoint to wake up a sleeping Render instance.
 * Returns true if the server responded, false otherwise.
 */
export const pingBackend = () =>
  api
    .get("/health", { timeout: 8000 })
    .then(() => true)
    .catch(() => false);

export default api;
