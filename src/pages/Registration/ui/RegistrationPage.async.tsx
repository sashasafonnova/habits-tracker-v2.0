import { lazy } from 'react';


export const RegistrationPageAsync = lazy(() => import('./RegistrationPage')
    .then(({ RegistrationPage }) => ({ default: RegistrationPage })),
);