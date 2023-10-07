import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppLoader.module.scss';

interface AppLoaderProps {
   className?: string;
}

export const AppLoader: React.FC<AppLoaderProps> = (props: AppLoaderProps) => {
   const { className = '' } = props;

   return (
      <div  className={classMaker(styles.ldsring, [className], {})}><div></div><div></div><div></div><div></div></div>
   );
};