import styles from './TrackCard.module.scss';
import { UserTrack } from '../../model/types/userTrack';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { trackCategories } from 'shared/lists/trackCategories/trackCategories';
import ProgressIcon from './assets/icons/progress-icon.svg';
import { AppTitle, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';


interface TrackCardProps {
   track: UserTrack;
}


export const TrackCard: React.FC<TrackCardProps> = ({ track }: TrackCardProps) => {

   const progressCalc = (length: number, progress: number) => {
      const res = progress / length * 100;
      return Math.round(res);
   };

   return (
      <div className={styles.item}>
         {trackCategories.map(item => {
            if (item.name === track.category) {
               return (
                  <div className={styles.category} key={item.name}>
                     {<item.icon className={styles.categoryIcon} />}
                     <span className={styles.categoryName}>{item.name}</span>
                  </div>
               );
            }
         })}
         <AppLink to={`/habits/${track._id}`} variant={AppLinkVariant.CLEAR}>
            <AppTitle variant={AppTitleVariant.BIG} marginBottom={'20'}>
               {track.title}
            </AppTitle>  
         </AppLink>
         <div className={styles.progress}>
            <ProgressIcon className={styles.progressIcon} />
            <span className={styles.progressText}>{`Прогресс: ${track.progress} из ${track.habitLength} (${progressCalc(track.habitLength, track.progress)}%)`}</span>
         </div>
         <p className={styles.lastCheck}><span>Последняя отметка:</span><br />{track.lastUpdated}</p>
         <AppButton variant={AppButtonVariant.BACKGROUND}>Сделать отметку</AppButton>
      </div>
   );
};