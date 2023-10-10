import styles from './FetchLoader.module.scss';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppText } from '../AppText/AppText';
import { VStack } from '../AppStack';

interface FetchLoaderProps {
   title?: string,
   action?: string,
   link?: string,
   loader?: boolean
}

export const FetchLoader: React.FC<FetchLoaderProps> = (props: FetchLoaderProps) => {

   const { title, action, link, loader } = props;

   return (
      <VStack className={styles.fetchLoader} gap='20' max maxHeight justify='center' align='center'>
         {loader && <AppLoader />}
         {title && <AppText size='l'>{title}</AppText>}
         {link && <AppLink to={link} variant='underline'>{action}</AppLink>}
      </VStack>
   );
};