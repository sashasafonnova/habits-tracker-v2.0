import { AppTitle, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import styles from './FetchLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';

interface FetchLoaderProps {
   title?: string,
   action?: string,
   link?: string,
   loader?: boolean
}

export const FetchLoader: React.FC<FetchLoaderProps> = (props: FetchLoaderProps) => {

   const { title, action, link, loader } = props;

   return (
      <div className={styles.fetchLoader}>
         {loader && <Loader />}
         <AppTitle variant={AppTitleVariant.BIG} marginBottom={'20'}>{title}</AppTitle>
         <AppLink to={link} variant={AppLinkVariant.UNDERLINE}>{action}</AppLink>
      </div>
   );
};