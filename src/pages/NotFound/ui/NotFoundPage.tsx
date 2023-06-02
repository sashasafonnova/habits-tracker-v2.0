import styles from './NotFoundPage.module.scss';


export const NotFoundPage: React.FC = () => {

   return (
      <div className={styles.page}>
         <div className='container'>
            <h1 className={styles.title}>Страница не найдена</h1>
         </div>
         
      </div>
   );
};