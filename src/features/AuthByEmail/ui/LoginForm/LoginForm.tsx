import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import styles from './LoginForm.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';
import { useSelector } from 'react-redux';
import { getLoginEmail } from 'features/AuthByEmail/model/selectors/getLoginEmail';
import { getLoginPassword } from 'features/AuthByEmail/model/selectors/getLoginPassword';
import { useCallback } from 'react';
import { loginActions } from 'features/AuthByEmail/model/slice/loginSlice';
import { loginByEmail } from 'features/AuthByEmail/model/services/loginByEmail';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';


export const LoginForm: React.FC = () => {

   const dispatch = useAppDispatch();
   const email = useSelector(getLoginEmail);
   const password = useSelector(getLoginPassword);


   const onChangeEmail = useCallback((value:string) => {
      dispatch(loginActions.setEmail(value));
   }, [dispatch]);


   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
   }, [dispatch]);


   const onCLickLogin = useCallback(() => {
      dispatch(loginByEmail({email, password}));
   }, [dispatch, email, password]);


   return (
      <div>
         <div className="container">
            <h1 className={styles.title}>Войти</h1>
            <p className={styles.subtitle}>Введите e-mail и пароль</p>
            <form className={styles.form}>
               <label className='dsp-none'>Логин</label>
               <AppInput 
                  value={email}
                  onChange={onChangeEmail}
                  type={'email'} 
                  placeholder={'e-mail'} 
                  variant={AppInputVariant.BACKGROUND} 
                  mb={'20'} 
                  inputSize={'standart'}
               />
               <label className='dsp-none'>Пароль</label>
               <AppInput 
                  value={password}
                  onChange={onChangePassword}
                  type={'password'} 
                  placeholder={'пароль'} 
                  variant={AppInputVariant.BACKGROUND} 
                  mb={'20'}
                  inputSize={'standart'}
               />
               <AppButton variant={AppButtonVariant.BACKGROUND} mb={'30'} onClick={onCLickLogin}>Войти</AppButton>
            </form>
            <div className={styles.account}>
               <span className={styles.text}>Нет аккаунта?</span>
               <AppLink to={RoutePath.registration} variant={AppLinkVariant.UNDERLINE}>Создать</AppLink>
            </div>            
         </div>
      </div>
   );
};