import { RoutePath } from 'app/providers/routerProvider/config/router';
import { FC } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../../../shared/lib/hooks/useAuth';


export interface PrivateRouteNavigatorProps {
   children: JSX.Element;
}

export const PrivateRouteNavigator: FC<PrivateRouteNavigatorProps> = (props: PrivateRouteNavigatorProps) => {
   const { children } = props;
   const { authData } = useAuth();

   if (!authData) {
      return <Navigate to={RoutePath.main} replace />;
   }

   return children;
};