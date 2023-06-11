
import { AccountPage } from 'pages/Account';
import { HomePage } from 'pages/Home';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/NotFound';
import { RegistrationPage } from 'pages/Registration';
import { TrackPage } from 'pages/Track';
import { TracksPage } from 'pages/Tracks';


export enum RouteName {
   MAIN = 'main',
   LOGIN = 'login',
   REGISTRATION = 'registration',
   ACCOUNT = 'account',
   TRACKS = 'tracks',
   TRACK = 'track',
   NOT_FOUND = 'not_found'
}


export const RoutePath = {
   [RouteName.MAIN]: '/',
   [RouteName.LOGIN]: '/login',
   [RouteName.REGISTRATION]: '/registration',
   [RouteName.ACCOUNT]: '/account',
   [RouteName.TRACKS]: '/tracks',
   [RouteName.TRACK]: '/tracks/:id',
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
   [RouteName.ACCOUNT]: {
      path: RoutePath.account,
      element: <AccountPage />,
   },
   [RouteName.TRACKS]: {
      path: RoutePath.tracks,
      element: <TracksPage />,
   },
   [RouteName.TRACK]: {
      path: RoutePath.track,
      element: <TrackPage/>,
   },
   [RouteName.NOT_FOUND]: {
      path: RoutePath.not_found,
      element: <NotFoundPage />,
   },
};