import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

const getToken = () => {
   const localData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
   
   if (localData) {
      const authData = JSON.parse(localData);
      const { token } = authData;
      return `Bearer ${token}`;
   }
};


export const $api = axios.create({
   baseURL: process.env.FETCH_URL,
   headers: {
      Authorization: getToken()
   }
});