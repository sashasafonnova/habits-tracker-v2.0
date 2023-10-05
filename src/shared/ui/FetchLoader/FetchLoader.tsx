import styles from './FetchLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
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
      <VStack className={styles.fetchLoader} gap='20' max maxHeight>
         {loader && <Loader />}
         <AppText size='l'>{title}</AppText>
         <AppLink to={link} variant={AppLinkVariant.UNDERLINE}>{action}</AppLink>
      </VStack>
   );
};