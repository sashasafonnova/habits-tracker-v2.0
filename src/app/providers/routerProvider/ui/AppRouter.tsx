import { Routes, Route } from 'react-router-dom';
import { AppRoutes, AppRoutesProps } from '../config/router';
import { Suspense, useCallback } from 'react';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';
import { PublicRouteNavigator } from '../hoc/PublicRouteNavigator';
import { PrivateRouteNavigator } from '../hoc/PrivateRouteNavigator';


export const AppRouter = () => {
   
   const renderWithWrapper = useCallback((route: AppRoutesProps) => {
      
      const element = (
         <Suspense fallback={<FetchLoader loader={true} />}>
            {route.element}
         </Suspense>
      );
      return (
         <Route
            key={route.path}
            path={route.path}
            element={route.visible === 'public' ? (
               <PublicRouteNavigator>
                  {element}
               </PublicRouteNavigator>) : (
               <PrivateRouteNavigator>
                  {element}
               </PrivateRouteNavigator>
            )}
         />
      );
   }, []);

   return (
      <Routes>
         {Object.values(AppRoutes).map(renderWithWrapper)}
      </Routes>
   );
};