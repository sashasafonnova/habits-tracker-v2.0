import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppSkeleton.module.scss';

interface AppSkeletonProps extends React.HTMLProps<HTMLDivElement> {
   className?: string;
}

export const AppSkeleton: React.FC<AppSkeletonProps> = (props: AppSkeletonProps) => {
   const { className = '', ...otherProps } = props;

   return (
      <div className={classMaker(styles.appSkeleton, [className], {})} {...otherProps} />
   );
};
