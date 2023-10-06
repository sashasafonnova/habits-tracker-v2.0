import { UserTrack } from 'entities/UserTrack';

export interface TracksListSchema {
   tracksList: UserTrack[] | null;
   isLoading: boolean;
   fetchError?: string;
}