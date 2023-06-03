import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import styles from './LoginForm.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';
import { useSelector } from 'react-redux';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { useCallback, useEffect } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByEmail } from '../../model/services/loginByEmail';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { getAuthData } from 'entities/User';
import { getLoginIsLoading } from 'features/AuthByEmail/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';


export const LoginForm: React.FC = () => {

   const dispatch = useAppDispatch();
   const authData = useSelector(getAuthData);
   const isLoading = useSelector(getLoginIsLoading);

   const email = useSelector(getLoginEmail);
   const password = useSelector(getLoginPassword);
   const navigate = useNavigate();


   const onChangeEmail = useCallback((value:string) => {
      dispatch(loginActions.setEmail(value));
   }, [dispatch]);


   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
   }, [dispatch]);


   const onCLickLogin = useCallback( async () => {
      const res = await dispatch(loginByEmail({email, password}));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.payload));
      return navigate('/account');
   }, [dispatch, email, password]);


   return (
      <div>
         <div className="container">
            <h1 className={styles.title}>Войти</h1>
            <p className={styles.subtitle}>Введите e-mail и пароль</p>
            <form className={styles.form}>
               <label className='dsp-none'>Логин</label>
               <AppInput 
                  marginBottom={'20'}
                  value={email}
                  onChange={onChangeEmail}
                  type={'email'} 
                  placeholder={'e-mail'} 
                  variant={AppInputVariant.BACKGROUND} 
                  inputSize={'standart'}
               />
               <label className='dsp-none'>Пароль</label>
               <AppInput 
                  marginBottom={'20'}
                  value={password}
                  onChange={onChangePassword}
                  type={'password'} 
                  placeholder={'пароль'} 
                  variant={AppInputVariant.BACKGROUND} 
                  inputSize={'standart'}
               />
               <AppButton 
                  variant={AppButtonVariant.BACKGROUND} 
                  marginBottom={'30'} 
                  onClick={onCLickLogin}>
                     Войти
               </AppButton>
            </form>
            <div className={styles.account}>
               <span className={styles.text}>Нет аккаунта?</span>
               <AppLink to={RoutePath.registration} variant={AppLinkVariant.UNDERLINE}>Создать</AppLink>
            </div>            
         </div>
         {isLoading && <Modal><Loader/></Modal>}
      </div>
   );
};