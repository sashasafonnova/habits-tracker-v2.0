
import { HomePage } from 'pages/Home';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/NotFound';
import { RegistrationPage } from 'pages/Registration';


export enum RouteName {
   MAIN = 'main',
   LOGIN = 'login',
   REGISTRATION = 'registration',
   NOT_FOUND = 'not_found'
}


export const RoutePath = {
   [RouteName.MAIN]: '/',
   [RouteName.LOGIN]: '/login',
   [RouteName.REGISTRATION]: '/registration',
   [RouteName.NOT_FOUND]: '*'

};


export const AppRoutes = {
   [RouteName.MAIN]: {
      path: RoutePath.main,
      element: <HomePage />,
   },
   [RouteName.LOGIN]: {
      path: RoutePath.login,
      element: <LoginPage/>,
   },
   [RouteName.REGISTRATION]: {
      path: RoutePath.registration,
      element: <RegistrationPage />,
   },
   [RouteName.NOT_FOUND]: {
      path: RoutePath.not_found,
      element: <NotFoundPage />,
   },
};