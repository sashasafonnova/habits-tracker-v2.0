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
   popupPosition?: 'positionRight' | 'positionLeft';
}

export function AppDropdown (props: AppDropdownProps) {
   const {
      className = '',
      children,
      short = false,
      button,
      buttonProps,
      popupPosition = 'positionLeft',
   } = props;
   const [isOpen, setIsOpen] = useState(false);
   const popupMods = {
      [styles.short]: short,
   };
   const onTogglePopup = useCallback(() => {
      setIsOpen((prev) => !prev);
   }, []);

   return (
      <div className={classMaker(styles.appDropdown, [className], {})}>
         <AppButton onClick={onTogglePopup} focus={isOpen} {...buttonProps}>
            {button}
         </AppButton>
         {isOpen && (
            <div className={classMaker(styles.popup, [styles[popupPosition]], popupMods)} onClick={onTogglePopup}>{children}</div>
         )}
      </div>
   );
}
