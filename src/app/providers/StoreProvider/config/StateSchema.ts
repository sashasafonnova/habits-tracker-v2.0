import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User';
import { UserTrackSchema } from 'entities/UserTrack';
import { LoginSchema } from 'features/AuthByEmail';
import { TrackListSchema } from 'widgets/TrackList';


export interface StateSchema {
   login: LoginSchema,
   user: UserSchema,
   userTrack: UserTrackSchema,
   fetchTracks: TrackListSchema
}

export interface ThunkExtraArg {
   api: AxiosInstance
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
}