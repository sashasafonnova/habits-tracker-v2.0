import { authDataSelector } from 'entities/User';
import { useSelector } from 'react-redux';

export const useAuth = () => {
   const authData = useSelector(authDataSelector);

   return {authData};
};