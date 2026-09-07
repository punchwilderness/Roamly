import axios from 'axios';

const api = axios.create({
  baseURL: 'https://roamly-backend-brown.vercel.app/api/v1',

  withCredentials: true,
});

export default api;
