import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import styles from './Footer.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';


export const Footer: React.FC = () =>{
   
   return (
      <footer className={styles.footer}>
         <div className="container">
            <ThemeSwitcher />
            <p className={styles.copyRight}>© HabitsTracker, 2023</p>
            <AppButton variant={AppButtonVariant.CLEAR_WHITE}>Сообщить о проблеме</AppButton>
         </div>
      </footer>
   );
};