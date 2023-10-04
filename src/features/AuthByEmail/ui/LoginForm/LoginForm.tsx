import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';
import { loginEmailSelector } from '../../model/selectors/loginEmailSelector/loginEmailSelector';
import { loginPasswordSelector } from '../../model/selectors/loginPasswordSelector/loginPasswordSelector';
import { loginErrorsSelector } from '../../model/selectors/loginErrorsSelector/loginErrorsSelector';
import { loginIsLoadingSelector } from '../../model/selectors/loginIsLoadingSelector/loginIsLoadingSelector';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByEmail } from '../../model/services/loginByEmail';
import { authDataSelector } from 'entities/User';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { Fields, validateLoginData } from '../../model/services/validation/validateLoginData/validateLoginData';
import { checkInputValue } from 'features/AuthByEmail/model/services/validation/checkInputValue/checkInputValue';
import { HStack, VStack } from 'shared/ui/AppStack';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';


export const LoginForm: React.FC = () => {

   useStateCreator({ login: loginReducer }, true);
   
   const dispatch = useAppDispatch();
   const authData = useSelector(authDataSelector);
   const isLoading = useSelector(loginIsLoadingSelector);
   const errors = useSelector(loginErrorsSelector);
   const emailValue = useSelector(loginEmailSelector);
   const passwordValue = useSelector(loginPasswordSelector);
   const navigate = useNavigate();

   useEffect(() => {
      if (authData) {
         return navigate('/account');
      }
   }, [authData]);


   const onChangeEmail = useCallback((value:string) => {
      const checkedValue = checkInputValue(value);
      dispatch(loginActions.setEmail(checkedValue));
   }, [dispatch]);


   const onChangePassword = useCallback((value: string) => {
      const checkedValue = checkInputValue(value);
      dispatch(loginActions.setPassword(checkedValue));
   }, [dispatch]);
   

   const onFocus = useCallback((field: string) => {
      const errorField = field === 'email' ? { ...errors, email: '' } : { ...errors, password: '' };
      dispatch(loginActions.setValidateErrors(errorField));
   }, [errors]);


   const onBlur = useCallback((field: Fields) => {
      const validateErrors = validateLoginData({ email: emailValue, password: passwordValue }, field);
      dispatch(loginActions.setValidateErrors({...errors, ...validateErrors }));
   }, [errors, emailValue, passwordValue]);


   const onCLickLogin = useCallback(async () => {
      const res = await dispatch(loginByEmail({email: emailValue, password: passwordValue}));

      if (loginByEmail.fulfilled.match(res)){
         localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.payload));
      }
   }, [dispatch, emailValue, passwordValue]);
   

   return (
      <AppBlock container className={classMaker(styles.loginForm, [], {})} >
         <VStack max maxHeight align='center' justify='center' gap='20' className={styles.content}>
            <VStack gap='10' align='center'>
               <h1 className={styles.title}>Войти</h1>
               <p className={errors?.others && styles.errorSubtitle}>{errors?.others ? errors.others : 'Введите e-mail и пароль'}</p>
            </VStack>
            <form className={styles.form}>
               <VStack align='center' gap='20'>
                  <HStack className={styles.inputWrapper} max>
                     {errors?.email && (
                        <div className={styles.errorInput}>{errors?.email}</div>
                     )}
                     <label className='dsp-none'>Логин</label>
                     <AppInput
                        value={emailValue}
                        onChange={onChangeEmail}
                        onFocus={() => onFocus('email')}
                        onBlur={() => onBlur('email')}
                        type={'email'}
                        placeholder={'e-mail'}
                        variant={AppInputVariant.BACKGROUND}
                        inputSize={'standart'}
                     />
                  </HStack>
                  <HStack className={styles.inputWrapper} max>
                     {errors?.password && (
                        <div className={styles.errorInput}>{errors.password}</div>
                     )}
                     <label className='dsp-none'>Пароль</label>
                     <AppInput
                        value={passwordValue}
                        onChange={onChangePassword}
                        onFocus={() => onFocus('password')}
                        onBlur={() => onBlur('password')}
                        type={'password'}
                        placeholder={'пароль'}
                        variant={AppInputVariant.BACKGROUND}
                        inputSize={'standart'}
                     />
                  </HStack> 
                  <AppButton
                     max
                     variant='background'
                     onClick={onCLickLogin}>
                     Войти
                  </AppButton>
               </VStack>
            </form>
            <HStack className={styles.account}>
               <span className={styles.text}>Нет аккаунта?</span>
               <AppLink to={RoutePath.registration} variant={AppLinkVariant.UNDERLINE}>Создать</AppLink>
            </HStack>
            {isLoading && <Modal><Loader /></Modal>}
         </VStack>
      </AppBlock>
   );
};