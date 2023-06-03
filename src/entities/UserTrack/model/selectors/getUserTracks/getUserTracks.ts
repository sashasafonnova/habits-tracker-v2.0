import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserTracks = (state: StateSchema) => state?.userTrack?.userTrackData || [];