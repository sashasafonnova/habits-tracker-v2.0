import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';


export enum AppLinkVariant {
   CLEAR = 'clear'
}

interface AppLinkProps extends LinkProps {
   variant?: AppLinkVariant,
}


export const AppLink: React.FC<AppLinkProps> = (props) => {

    const {children, to, variant, ...otherProps} = props;

    return (
        <Link 
            className={styles[variant]}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};