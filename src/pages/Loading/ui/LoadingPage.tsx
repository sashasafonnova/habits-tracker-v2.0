import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './LoadingPage.module.scss';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';

interface LoadingPageProps {
   className?: string;
}

export const LoadingPage: React.FC<LoadingPageProps> = (props: LoadingPageProps) => {
   const { className = '' } = props;

   return (
      <AppBlock type='page' className={classMaker(styles.loadingPage, [className], {})}>
         <FetchLoader loader/>
      </AppBlock>
   );
};
