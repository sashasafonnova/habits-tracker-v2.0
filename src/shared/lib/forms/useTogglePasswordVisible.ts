import { useCallback, useState } from 'react';
import closeEyeIcon from 'shared/assets/icon/close-eye-icon.svg';
import openEyeIcon from 'shared/assets/icon/open-eye-icon.svg';

export const useTogglePasswordVisible = () => {
   const [isVisible, setIsVisible] = useState(false);

   const onToggleVisible = useCallback(() => {
      setIsVisible((prev) => !prev);
   }, []);

   return {
      isVisible, onToggleVisible, closeEyeIcon, openEyeIcon
   };
};