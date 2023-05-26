import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../config/router';
import { Suspense } from 'react';

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(AppRoutes).map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        <Suspense fallback=''>
                            {route.element}
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};