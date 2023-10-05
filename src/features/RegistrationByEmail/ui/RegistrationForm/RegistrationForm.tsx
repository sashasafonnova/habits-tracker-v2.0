import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './RegistrationForm.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';
import { HStack, VStack } from 'shared/ui/AppStack';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { AppText } from 'shared/ui/AppText/AppText';

export const RegistrationForm: React.FC = () => {
   return (
      <AppBlock className={classMaker(styles.registrationForm, [], {})}>
         <VStack max maxHeight align='center' justify='center' className={styles.content} gap='40'>
            <VStack gap='10' align='center'>
               <h1 className={styles.title}>Регистрация</h1>
               <p className={styles.subtitle}>Введите e-mail и пароль</p>
            </VStack>
            <form className={styles.form}>
               <VStack align='center' gap='20'>
                  <HStack className={styles.inputWrapper} max>
                     <label className='dsp-none'>E-mail</label>
                     <AppInput
                        type={'email'} 
                        placeholder={'e-mail'} 
                        variant={AppInputVariant.BACKGROUND} 
                        inputSize={'standart'}
                     />
                  </HStack>
                  <HStack className={styles.inputWrapper} max>
                     <label className='dsp-none'>Пароль</label>
                     <AppInput
                        type={'password'} 
                        placeholder={'пароль'} 
                        variant={AppInputVariant.BACKGROUND} 
                     />
                  </HStack>
                  <AppButton max
                     contentPosition='positionCenter'
                     variant='background'>
                     Зарегистрироваться
                  </AppButton>
               </VStack>
            </form>
            <HStack gap='10'>
               <AppText Tag='span' >Уже есть аккаунт?</AppText>
               <AppLink to={RoutePath.login} variant={AppLinkVariant.UNDERLINE}>Войти</AppLink>
            </HStack>
         </VStack>
      </AppBlock>
      
   );
};