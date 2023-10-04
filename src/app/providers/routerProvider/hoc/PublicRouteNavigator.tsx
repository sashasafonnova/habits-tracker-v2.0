import { RoutePath } from 'app/providers/routerProvider/config/router';
import { FC } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../../../shared/lib/hooks/useAuth';


export interface PublicRouteNavigatorProps {
   children: JSX.Element;
}

export const PublicRouteNavigator: FC<PublicRouteNavigatorProps> = (props: PublicRouteNavigatorProps) => {
   const { children } = props;
   const { authData } = useAuth();

   if (authData) {
      return <Navigate to={RoutePath.tracks} replace />;
   }

   return children;
};