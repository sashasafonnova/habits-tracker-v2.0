import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import styles from './LoginForm.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppInput, AppInputVariant } from 'shared/ui/AppInput/AppInput';


export const LoginForm: React.FC = () => {
    return (
        <div>
            <div className="container">
                <h1 className={styles.title}>Войти</h1>
                <p className={styles.subtitle}>Введите e-mail и пароль</p>
                <form className={styles.form}>
                    <label className='dsp-none'>Логин</label>
                    <AppInput type={'email'} placeholder={'e-mail'} variant={AppInputVariant.BACKGROUND} mb={'20'}></AppInput>
                    <label className='dsp-none'>Пароль</label>
                    <AppInput type={'password'} placeholder={'пароль'} variant={AppInputVariant.BACKGROUND} mb={'40'}></AppInput>
                    <AppButton variant={AppButtonVariant.BACKGROUND} mb={'20'}>Войти</AppButton>
                </form>
                <div className={styles.account}>
                    <span className={styles.text}>Нет аккаунта?</span>
                    <AppLink to={RoutePath.registration} variant={AppLinkVariant.CLEAR}>Создать</AppLink>
                </div>            
            </div>
        </div>
    );
};