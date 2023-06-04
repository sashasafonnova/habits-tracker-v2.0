import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

const getToken = () => {
   const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
   if (authData) {
      const { token } = authData;
      return `Bearer ${token}`;
   }
   return '';
};


export const $api = axios.create({
   baseURL: process.env.FETCH_URL,
   headers: {
      Authorization: getToken()
   }
});