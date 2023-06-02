import { UserSchema } from 'entities/User';
import { UserTrackSchema } from 'entities/UserTrack';
import { LoginSchema } from 'features/AuthByEmail';


export interface StateSchema {
   login: LoginSchema,
   user: UserSchema,
   userTrack: UserTrackSchema,
}
