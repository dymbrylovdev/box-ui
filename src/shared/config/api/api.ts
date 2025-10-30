import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

// console.log(import.meta.env.VITE_API_URL);
const baseURL = __IS_DEV__ ? '/api' : __API__;

export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
