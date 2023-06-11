import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User';
import { UserTrackSchema } from 'entities/UserTrack';
import { LoginSchema } from 'features/AuthByEmail';
import { TrackProfileSchema } from 'entities/TrackProfile';
import { RemoveTrackSchema } from 'features/RemoveTrack';


export interface StateSchema {
   login?: LoginSchema,
   user: UserSchema,
   userTrack?: UserTrackSchema,
   trackProfile?: TrackProfileSchema,
   removeTrack?: RemoveTrackSchema
}

export interface ThunkExtraArg {
   api: AxiosInstance
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
}