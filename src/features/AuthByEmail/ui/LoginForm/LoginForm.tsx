import styles from './LoginForm.module.scss';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';
import { loginEmailSelector } from '../../model/selectors/loginEmailSelector/loginEmailSelector';
import { loginPasswordSelector } from '../../model/selectors/loginPasswordSelector/loginPasswordSelector';
import { loginErrorsSelector } from '../../model/selectors/loginErrorsSelector/loginErrorsSelector';
import { loginIsLoadingSelector } from '../../model/selectors/loginIsLoadingSelector/loginIsLoadingSelector';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByEmail } from '../../model/services/loginByEmail';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { HStack, VStack } from 'shared/ui/AppStack';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { AppText } from 'shared/ui/AppText/AppText';
import { checkInputValue } from 'shared/lib/validation/checkInputValue/checkInputValue';
import { Fields, validateFormData } from 'shared/lib/validation/validateFormData/validateFormData';

export const LoginForm: React.FC = () => {

   useStateCreator({ login: loginReducer }, true);
   
   const dispatch = useAppDispatch();
   const isLoading = useSelector(loginIsLoadingSelector);
   const errors = useSelector(loginErrorsSelector);
   const email = useSelector(loginEmailSelector);
   const password = useSelector(loginPasswordSelector);

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
   }, [dispatch, errors]);


   const onBlur = useCallback((field: Fields) => {
      const validateErrors = validateFormData({ email, password }, field);
      dispatch(loginActions.setValidateErrors({...errors, ...validateErrors }));
   }, [email, password, dispatch, errors]);


   const onCLickLogin = useCallback(async () => {
      const res = await dispatch(loginByEmail());

      if (loginByEmail.fulfilled.match(res)){
         localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.payload));
      }
   }, [dispatch]);
   

   return (
      <AppBlock container className={classMaker(styles.loginForm, [], {})}>
         <VStack max maxHeight align='center' justify='center' gap='40' className={styles.content}>
            <VStack gap='10' align='center'>
               <AppText Tag='h1' className={styles.title}>Войти</AppText>
               <AppText Tag='p' className={errors?.others && styles.errorSubtitle}>{errors?.others ? errors.others : 'Введите e-mail и пароль'}</AppText>
            </VStack>
            <form className={styles.form}>
               <VStack align='center' gap='20'>
                  <VStack className={styles.inputWrapper} max>
                     {errors?.email && (
                        <AppText Tag='span' size='xs' color='error' className={styles.errorInput}>{errors?.email}</AppText>
                     )}
                     <label className='dsp-none'>Логин</label>
                     <AppInput
                        value={email}
                        onChange={onChangeEmail}
                        onFocus={() => onFocus('email')}
                        onBlur={() => onBlur('email')}
                        type={'email'}
                        placeholder={'e-mail'}
                        variant={AppInputVariant.BACKGROUND}
                        inputSize={'standart'}
                     />
                  </VStack>
                  <VStack className={styles.inputWrapper} max>
                     {errors?.password && (
                        <AppText Tag='span' size='xs' color='error' className={styles.errorInput}>{errors.password}</AppText>
                     )}
                     <label className='dsp-none'>Пароль</label>
                     <AppInput
                        value={password}
                        onChange={onChangePassword}
                        onFocus={() => onFocus('password')}
                        onBlur={() => onBlur('password')}
                        type={'password'}
                        placeholder={'пароль'}
                        variant={AppInputVariant.BACKGROUND}
                        inputSize={'standart'}
                     />
                  </VStack> 
                  <AppButton
                     contentPosition='positionCenter'
                     max
                     variant='background'
                     onClick={onCLickLogin}>
                     Войти
                  </AppButton>
               </VStack>
            </form>
            <HStack gap='10'>
               <AppText Tag='span'>Нет аккаунта?</AppText>
               <AppLink to={RoutePath.registration} variant='underline'>Создать</AppLink>
            </HStack>
            {isLoading && <Modal><Loader /></Modal>}
         </VStack>
      </AppBlock>
   );
};