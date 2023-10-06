import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './TrackSkeleton.module.scss';

interface TrackSkeletonProps {
   className?: string;
}

export const TrackSkeleton: React.FC<TrackSkeletonProps> = (props: TrackSkeletonProps) => {
   const { className = '' } = props;

   return (
      <div className={classMaker(styles.trackSkeleton, [className], {})}>
         <div className={styles.category}>
            <div className={styles.categoryIcon}></div>
            <div className={styles.categoryText}></div>
         </div>
         <div className={styles.title}></div>
         <div className={styles.progress}></div>
         <div className={styles.lastCheckTitle}></div>
         <div className={styles.lastCheck}></div>
         <div className={styles.btnCheck}></div>
      </div>
   );
};