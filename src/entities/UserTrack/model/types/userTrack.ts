export interface UserTrack {
   _id?: string;
   author?: string;
   category?: string;
   title?: string;
   habitLength?: number;
   progress?: number;
   dateCreated?: string;
   lastUpdated?: string;
   status?: string;
}

export interface UserTrackSchema {
   userTrackData?: UserTrack[];
   isLoading: boolean;
   error?: string
}