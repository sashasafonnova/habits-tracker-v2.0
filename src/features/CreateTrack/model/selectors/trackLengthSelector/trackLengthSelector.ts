import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const trackLengthSelector = (state: StateSchema) => state?.createTrack?.trackLength || 10;