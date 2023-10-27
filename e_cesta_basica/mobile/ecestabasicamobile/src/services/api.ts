import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tcc-ngvq.onrender.com'
})