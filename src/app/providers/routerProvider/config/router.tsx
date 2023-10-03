
import { AccountPage } from 'pages/Account';
import { CreateTrackPage } from 'pages/CreateTrack';
import { HomePage } from 'pages/Home';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/NotFound';
import { RegistrationPage } from 'pages/Registration';
import { TrackPage } from 'pages/Track';
import { TracksPage } from 'pages/Tracks';
import { RouteProps } from 'react-router-dom';


export enum RouteName {
   MAIN = 'main',
   LOGIN = 'login',
   REGISTRATION = 'registration',
   ACCOUNT = 'account',
   TRACKS = 'tracks',
   TRACK = 'track',
   CREATE_TRACK = 'create_track',
   NOT_FOUND = 'not_found'
}


export const RoutePath: Record<RouteName, string> = {
   [RouteName.MAIN]: '/',
   [RouteName.LOGIN]: '/login',
   [RouteName.REGISTRATION]: '/registration',
   [RouteName.ACCOUNT]: '/account',
   [RouteName.TRACKS]: '/tracks',
   [RouteName.TRACK]: '/tracks/:id',
   [RouteName.CREATE_TRACK]: '/create',
   [RouteName.NOT_FOUND]: '*'
};

export type AppRoutesProps = RouteProps & {
   visible: 'public' | 'private';
}

export const AppRoutes: Record<RouteName, AppRoutesProps> = {
   [RouteName.MAIN]: {
      path: RoutePath.main,
      visible: 'public',
      element: <HomePage />,
   },
   [RouteName.LOGIN]: {
      path: RoutePath.login,
      visible: 'public',
      element: <LoginPage/>,
   },
   [RouteName.REGISTRATION]: {
      path: RoutePath.registration,
      visible: 'public',
      element: <RegistrationPage />,
   },
   [RouteName.ACCOUNT]: {
      path: RoutePath.account,
      visible: 'private',
      element: <AccountPage />,
   },
   [RouteName.TRACKS]: {
      path: RoutePath.tracks,
      visible: 'private',
      element: <TracksPage />,
   },
   [RouteName.TRACK]: {
      path: RoutePath.track,
      visible: 'private',
      element: <TrackPage/>,
   },
   [RouteName.CREATE_TRACK]: {
      path: RoutePath.create_track,
      visible: 'private',
      element: <CreateTrackPage/>,
   },
   [RouteName.NOT_FOUND]: {
      path: RoutePath.not_found,
      visible: 'private',
      element: <NotFoundPage />,
   },
};