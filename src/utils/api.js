import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
  // Tambahkan config lain jika perlu (headers, timeout, dll)
});

export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);

export default api;