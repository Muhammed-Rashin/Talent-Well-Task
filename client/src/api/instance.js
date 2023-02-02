import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chat.pradax.online',
  withCredentials: true,
});

export default instance;