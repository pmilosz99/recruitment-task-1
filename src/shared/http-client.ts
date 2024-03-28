import axios from 'axios';
import { API_URL } from './const';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
});

export const getHttpClient = () => axiosInstance;
