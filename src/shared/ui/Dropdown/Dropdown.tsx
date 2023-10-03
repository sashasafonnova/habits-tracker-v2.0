import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './Dropdown.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { memo } from 'react';

export interface DropdownItemType {
   icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
   name: string
}

export enum DropdownVariant {
   BACKGROUND = 'background',
}

export enum DropdownMods {
   ABSOLUTE = 'absolute',
   SHORT = 'short'
}

interface DropdownProps {
   className?: string;
   variant?: DropdownVariant; 
   mods?: Record<string, boolean>,
   list: DropdownItemType[];
   onChoose?: (value: string) => void,
   marginBottom?: string;
}

export const Dropdown: React.FC<DropdownProps> = memo(function Dropdown(props: DropdownProps){
   const { onChoose, list, variant, mods, marginBottom, className } = props;

   const additional = [
      className,
      styles[variant],
      `marginBottom${marginBottom}`
   ];

   const stylesMods = {
      [styles[DropdownMods.SHORT]]: mods?.short,

   };

   return (
      <ul className={classMaker(styles.dropdown, additional, stylesMods)}>
         {list.map(item => (
            <li key={item.name}>
               <AppButton onClick={onChoose} value={item.name}>
                  <div className={styles.option}>
                     {item.icon && <item.icon className={styles.icon} />}
                     <span>{item.name}</span>
                  </div>
               </AppButton>
            </li>
         ))}
      </ul>
   );
});