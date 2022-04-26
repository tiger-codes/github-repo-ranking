import axios from 'axios';

export const setAuthHeader = (authToken: string): void => {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
}

export const axiosInstance = axios.create();