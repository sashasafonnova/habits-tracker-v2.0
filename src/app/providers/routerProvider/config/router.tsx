import { HomePage } from 'pages/Home';
import { LoginPage } from 'pages/Login';
import { RegistrationPage } from 'pages/Registration';


export enum RouteName {
   MAIN = 'main',
   LOGIN = 'login',
   REGISTRATION = 'registration'
}


export const RoutePath = {
   [RouteName.MAIN]: '/',
   [RouteName.LOGIN]: '/login',
   [RouteName.REGISTRATION]: '/registration'
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
};