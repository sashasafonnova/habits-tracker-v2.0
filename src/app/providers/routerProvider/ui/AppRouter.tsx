import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../config/router';
import { Suspense } from 'react';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';

export const AppRouter = () => {
   return (
      <Routes>
         {Object.values(AppRoutes).map(route => (
            <Route
               key={route.path}
               path={route.path}
               element={
                  <Suspense fallback={<FetchLoader loader={true}/>}>
                     {route.element}
                  </Suspense>
               }
            />
         ))}
      </Routes>
   );
};