import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const trackCategorySelector = (state: StateSchema) => state?.createTrack?.category || '';