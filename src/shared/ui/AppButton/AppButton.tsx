
import { ButtonHTMLAttributes } from 'react';
import styles from './AppButton.module.scss';
import { classMaker } from 'shared/lib/classMaker';


export enum AppButtonVariant {
   CLEAR = 'clear',
   BACKGROUND = 'background'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: AppButtonVariant,
   mb?: string,
}


export const AppButton: React.FC<AppButtonProps> = (props) => {

    const { children, variant, mb, ...otherProps } = props;

    const mods = {
        [styles[`mb${mb}`]]: mb,
    };

    return (
        <button
            type="button"
            className={classMaker(styles['appButton'], mods, [styles[variant]])}
            {...otherProps}     
        >
            {children}
        </button>
    );
};