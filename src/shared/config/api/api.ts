import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
