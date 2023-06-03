import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import styles from './RegistrationForm.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';


export const RegistrationForm: React.FC = () => {
   return (
      <div>
         <div className="container">
            <h1 className={styles.title}>Регистрация</h1>
            <p className={styles.subtitle}>Введите e-mail и пароль</p>
            <form className={styles.form}>
               <label className='dsp-none'>E-mail</label>
               <AppInput
                  marginBottom={'20'}
                  type={'email'} 
                  placeholder={'e-mail'} 
                  variant={AppInputVariant.BACKGROUND} 
                  inputSize={'standart'}
               />
               <label className='dsp-none'>Пароль</label>
               <AppInput
                  marginBottom={'20'} 
                  type={'password'} 
                  placeholder={'пароль'} 
                  variant={AppInputVariant.BACKGROUND} 
               />
               <AppButton 
                  variant={AppButtonVariant.BACKGROUND}
                  marginBottom={'30'}>
                     Зарегистрироваться
               </AppButton>
            </form>
            <div className={styles.account}>
               <span className={styles.text}>Уже есть аккаунт?</span>
               <AppLink to={RoutePath.login} variant={AppLinkVariant.UNDERLINE}>Войти</AppLink>
            </div>
         </div>
      </div>
   );
};