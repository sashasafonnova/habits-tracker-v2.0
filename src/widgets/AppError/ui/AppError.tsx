import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './AppError.module.scss';
import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';


export const AppError: React.FC = memo(function AppError(){

   const navigate = useNavigate();

   const reloadPage = () => {
      navigate(0);
   };
   
   return (
      <section className={styles.appError}>
         <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.MAIN} marginBottom={'20'}>Произошла непредвиденная ошибка</AppTitle>
         <AppButton variant='background' onClick={reloadPage}>
            Обновить страницу
         </AppButton>
      </section>
   );
});