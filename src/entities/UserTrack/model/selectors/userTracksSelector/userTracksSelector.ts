import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const userTracksSelector = (state: StateSchema) => state?.userTrack?.userTrackData || [];