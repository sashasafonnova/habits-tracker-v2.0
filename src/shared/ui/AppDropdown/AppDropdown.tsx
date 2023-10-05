import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppButton, AppButtonProps } from 'shared/ui/AppButton/AppButton';
import { ReactNode, useCallback, useState } from 'react';
import styles from './AppDropdown.module.scss';

type AppDropdownButtonProps = Omit<AppButtonProps, 'children'>

interface AppDropdownProps {
   className?: string;
   children: ReactNode;
   buttonProps?: AppDropdownButtonProps;
   button: ReactNode;
   short?: boolean;
   focus?: boolean;
   max?: boolean;
   popupPosition?: 'positionRight' | 'positionLeft';
}

export function AppDropdown (props: AppDropdownProps) {
   const {
      className = '',
      children,
      short = false,
      button,
      buttonProps,
      focus,
      max,
      popupPosition = 'positionLeft',
   } = props;
   const [isOpen, setIsOpen] = useState(false);
   const popupMods = {
      [styles.short]: short,
      [styles.max]: max,
   };
   const onTogglePopup = useCallback(() => {
      setIsOpen((prev) => !prev);
   }, []);

   return (
      <div className={classMaker(styles.appDropdown, [className], {})}>
         <AppButton onClick={onTogglePopup} focus={focus && isOpen} {...buttonProps}>
            {button}
         </AppButton>
         {isOpen && (
            <div className={classMaker(styles.popup, [styles[popupPosition]], popupMods)} onClick={onTogglePopup}>{children}</div>
         )}
      </div>
   );
}
