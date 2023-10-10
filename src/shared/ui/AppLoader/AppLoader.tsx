import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppLoader.module.scss';

interface AppLoaderProps {
   className?: string;
   width?: number;
   height?: number;
}

export const AppLoader: React.FC<AppLoaderProps> = (props: AppLoaderProps) => {
   const { className = '', width = 80, height = 80 } = props;

   return (
      <div className={classMaker(styles.ldsring, [className], {})} style={{width: width, height: height}}>
         <div style={{width: width, height: height}}></div>
         <div style={{width: width, height: height}}></div>
         <div style={{width: width, height: height}}></div>
      </div>
   );
};