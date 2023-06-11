import { memo } from 'react';
import styles from './TrackProgress.module.scss';
import ProgressIcon from '../assets/icons/progress-icon.svg';
import { progressCalc } from '../lib/progressCalc';


interface ProgressCalcProps {
   progress: number;
   trackLength: number;
}


export const TrackProgress: React.FC<ProgressCalcProps> = memo(function ProgressCalc(props: ProgressCalcProps) {
   
   const { progress, trackLength } = props;

   return (
      <div className={styles.progress}>
         <ProgressIcon className={styles.progressIcon} />
         <span className={styles.progressText}>{`Прогресс: ${progress} из ${trackLength} (${progressCalc(trackLength, progress)})`}</span>
      </div>
   );
});   