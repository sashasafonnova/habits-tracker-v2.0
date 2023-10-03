import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const trackTitleSelector = (state: StateSchema) => state?.createTrack?.title || '';