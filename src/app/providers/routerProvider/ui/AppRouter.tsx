import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../config/router';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
   return (
      <Routes>
         {Object.values(AppRoutes).map(route => (
            <Route
               key={route.path}
               path={route.path}
               element={
                  <Suspense fallback={<PageLoader/>}>
                     {route.element}
                  </Suspense>
               }
            />
         ))}
      </Routes>
   );
};