import { UserTrack } from 'entities/UserTrack';

export interface TrackProfileSchema {
   profileData?: UserTrack
   isLoading: boolean,
   error?: string
}