import { UserTrack } from 'entities/UserTrack';

export interface TrackProfileSchema {
   profileData?: UserTrack,
   existStatus: 'exist' | 'deleted',
   isLoading: boolean,
   error?: string
}