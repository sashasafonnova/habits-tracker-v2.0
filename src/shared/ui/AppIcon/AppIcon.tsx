import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppIcon.module.scss';

interface AppIconProps extends React.SVGProps<SVGSVGElement> {
   className?: string;
   Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const AppIcon: React.FC<AppIconProps> = (props: AppIconProps) => {
   const {
      className = '', Svg, ...otherProps
   } = props;

   return (
      <Svg className={classMaker(styles.svg, [className], {})} {...otherProps} />
   );
};
