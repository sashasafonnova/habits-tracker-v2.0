import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { useTheme } from './providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { userActions } from 'entities/User';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRouter } from './providers/routerProvider';

const App = () => {
   const {theme} = useTheme();

   const dispatch = useAppDispatch();
   const location = useLocation();
   const navigate = useNavigate();


   useEffect(() => {
      const localData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (localData){
         const authData = JSON.parse(localData);
         dispatch(userActions.setAuthData(authData));
         navigate(location);
      }
   }, []);

   return (
      <div className={`app ${theme}`}>
         <Header/>
         <AppRouter />
         <Footer/> 
      </div>
   );
};

export default App;