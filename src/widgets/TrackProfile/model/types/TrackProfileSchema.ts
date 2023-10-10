import { UserTrack } from 'entities/UserTrack';

export interface TrackProfileSchema {
   profileData: UserTrack | null,
   existStatus: 'exist' | 'deleted',
   isLoading: boolean,
   error?: string
}