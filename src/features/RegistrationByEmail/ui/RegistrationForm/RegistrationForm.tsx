import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './RegistrationForm.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';
import { HStack, VStack } from 'shared/ui/AppStack';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { AppText } from 'shared/ui/AppText/AppText';
import { registrationActions, registrationReducer } from '../../model/slice/registration';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { registrationIsLoadingSelector } from '../../model/selectors/registrationIsLoadingSelector/registrationIsLoadingSelector';
import { useSelector } from 'react-redux';
import { registrationErrorsSelector } from '../../model/selectors/registrationErrorsSelector/registrationErrorsSelector';
import { registrationPasswordSelector } from '../../model/selectors/registrationPasswordSelector/registrationPasswordSelector';
import { useCallback } from 'react';
import { checkInputValue } from 'shared/lib/validation/checkInputValue/checkInputValue';
import { Fields, validateFormData } from 'shared/lib/validation/validateFormData/validateFormData';
import { registrationByEmail } from '../../model/services/registrationByEmail';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';
import { registrationFirstNameSelector } from '../../model/selectors/registrationFirstNameSelector/registrationFirstNameSelector';
import { registrationEmailSelector } from '../../model/selectors/registrationEmailSelector/registrationEmailSelector';

export const RegistrationForm: React.FC = () => {
   useStateCreator({ registration: registrationReducer }, true);
   
   const dispatch = useAppDispatch();
   const isLoading = useSelector(registrationIsLoadingSelector);
   const errors = useSelector(registrationErrorsSelector);
   const firstName = useSelector(registrationFirstNameSelector);
   const email = useSelector(registrationEmailSelector);
   const password = useSelector(registrationPasswordSelector);

   const onChangeFirstName = useCallback((value:string) => {
      const checkedValue = checkInputValue(value);
      dispatch(registrationActions.setFirstName(checkedValue));
   }, [dispatch]);

   const onChangeEmail = useCallback((value:string) => {
      const checkedValue = checkInputValue(value);
      dispatch(registrationActions.setEmail(checkedValue));
   }, [dispatch]);


   const onChangePassword = useCallback((value: string) => {
      const checkedValue = checkInputValue(value);
      dispatch(registrationActions.setPassword(checkedValue));
   }, [dispatch]);
   

   const onFocus = useCallback((field: string) => {
      let errorField = {};
      
      switch (field) {
      case 'firstName':
         errorField = { ...errors, firstName: '' };
         break;
      case 'emial':
         errorField = { ...errors, email: '' };
         break;
      case 'password':
         errorField = { ...errors, password: '' };
         break;
      }
      dispatch(registrationActions.setValidateErrors(errorField));
   }, [dispatch, errors]);


   const onBlur = useCallback((field: Fields) => {
      const validateErrors = validateFormData({ email, password, firstName }, field);
      dispatch(registrationActions.setValidateErrors({...errors, ...validateErrors }));
   }, [email, password, firstName, dispatch, errors]);


   const onClickReg = useCallback(async () => {
      const res = await dispatch(registrationByEmail());

      if (registrationByEmail.fulfilled.match(res)){
         localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.payload));
      }
   }, [dispatch]);

   return (
      <AppBlock className={classMaker(styles.registrationForm, [], {})}>
         <VStack max maxHeight align='center' justify='center' className={styles.content} gap='40'>
            <VStack gap='10' align='center'>
               <AppText Tag='h1' size='xl' color='primary' weight='bold'>Регистрация</AppText>
               <AppText Tag='p' className={errors?.others && styles.errorSubtitle}>{errors?.others ? errors.others : 'Введите данные'}</AppText>
            </VStack>
            <form className={styles.form}>
               <VStack align='center' gap='20'>
                  <HStack className={styles.inputWrapper} max>
                     {errors?.firstName && (
                        <AppText Tag='span' size='xs' color='error' className={styles.errorInput}>{errors?.firstName}</AppText>
                     )}
                     <label className='dsp-none'>Имя</label>
                     <AppInput
                        type={'email'} 
                        placeholder={'имя'} 
                        variant={AppInputVariant.BACKGROUND} 
                        inputSize={'standart'}
                        value={firstName}
                        onChange={onChangeFirstName}
                        onFocus={() => onFocus('firstName')}
                        onBlur={() => onBlur('firstName')}
                     />
                  </HStack>
                  <HStack className={styles.inputWrapper} max>
                     {errors?.email && (
                        <AppText Tag='span' size='xs' color='error' className={styles.errorInput}>{errors?.email}</AppText>
                     )}
                     <label className='dsp-none'>E-mail</label>
                     <AppInput
                        type={'email'} 
                        placeholder={'e-mail'} 
                        variant={AppInputVariant.BACKGROUND} 
                        inputSize={'standart'}
                        value={email}
                        onChange={onChangeEmail}
                        onFocus={() => onFocus('email')}
                        onBlur={() => onBlur('email')}
                     />
                  </HStack>
                  <HStack className={styles.inputWrapper} max>
                     {errors?.password && (
                        <AppText Tag='span' size='xs' color='error' className={styles.errorInput}>{errors?.password}</AppText>
                     )}
                     <label className='dsp-none'>Пароль</label>
                     <AppInput
                        type={'password'} 
                        value={password}
                        onChange={onChangePassword}
                        placeholder={'пароль'} 
                        variant={AppInputVariant.BACKGROUND} 
                        onFocus={() => onFocus('password')}
                        onBlur={() => onBlur('password')}

                     />
                  </HStack>
                  <AppButton max
                     onClick={onClickReg}
                     contentPosition='positionCenter'
                     variant='background'>
                     Зарегистрироваться
                  </AppButton>
               </VStack>
            </form>
            <HStack gap='10'>
               <AppText Tag='span' >Уже есть аккаунт?</AppText>
               <AppLink to={RoutePath.login} variant='underline'>Войти</AppLink>
            </HStack>
         </VStack>
         {isLoading && <Modal><AppLoader /></Modal>}
      </AppBlock>
   );
};