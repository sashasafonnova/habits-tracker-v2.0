import { Footer } from 'widgets/Footer';
import { AppRouter } from './providers/routerProvider';
import { Header } from 'widgets/Header';
import { useTheme } from './providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { userActions } from 'entities/User';
import { useLocation, useNavigate } from 'react-router-dom';


const App = () => {
   const {theme} = useTheme();

   const dispatch = useAppDispatch();
   const location = useLocation();
   const navigate = useNavigate();


   useEffect(() => {
      const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));

      if (authData){
         dispatch(userActions.setAuthData(authData));
         navigate(location);
      }
   }, []);

   return (
      <div className={`app ${theme}`}>
         <Header/>
         <div className='appContent'>
            <AppRouter />
         </div>
         <Footer/> 
      </div>
   );
};

export default App;