import styles from './Footer.module.scss';


export const Footer: React.FC = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.content}>
               <p className={styles.copyrigth}>© HabitsTracker, 2023</p>
               <button className={styles.btn}>Сообщить о проблеме</button>
            </div>
         </div>
      </footer>
   );
};