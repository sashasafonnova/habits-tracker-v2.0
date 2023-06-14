import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';
import { loginEmailSelector } from '../../model/selectors/loginEmailSelector/loginEmailSelector';
import { loginPasswordSelector } from '../../model/selectors/loginPasswordSelector/loginPasswordSelector';
import { loginErrorSelector } from '../../model/selectors/loginErrorSelector/loginErrorSelector';
import { loginIsLoadingSelector } from '../../model/selectors/loginIsLoadingSelector/loginIsLoadingSelector';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByEmail } from '../../model/services/loginByEmail';
import { authDataSelector } from 'entities/User';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';


export const LoginForm: React.FC = () => {

   useStateCreator({ login: loginReducer }, true);
   
   const dispatch = useAppDispatch();
   const authData = useSelector(authDataSelector);
   const isLoading = useSelector(loginIsLoadingSelector);
   const error = useSelector(loginErrorSelector);
   const email = useSelector(loginEmailSelector);
   const password = useSelector(loginPasswordSelector);
   const navigate = useNavigate();

   const onChangeEmail = useCallback((value:string) => {
      dispatch(loginActions.setEmail(value));
   }, [dispatch]);


   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
   }, [dispatch]);


   const onCLickLogin = useCallback(async () => {
      const res = await dispatch(loginByEmail({email, password}));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.payload));
      dispatch(loginActions.clearForm());
   }, [dispatch, email, password]);


   useEffect(() => {
      if (authData) {
         return navigate('/account');
      }
   }, [authData]);
   

   return (
      <section>
         <div className="container">
            <h1 className={styles.title}>Войти</h1>
            <p className={error ? styles.error : styles.subtitle}>{error ? error : 'Введите e-mail и пароль'}</p>
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
         {isLoading && <Modal><Loader /></Modal>}
      </section>      
   );
};