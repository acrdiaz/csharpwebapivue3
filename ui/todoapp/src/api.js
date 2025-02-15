import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7057/api/TodoApp'
});

export default api;
