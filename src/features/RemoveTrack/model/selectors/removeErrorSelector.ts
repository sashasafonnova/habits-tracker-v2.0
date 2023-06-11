import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const removeErrorSelector = (state: StateSchema) => state?.removeTrack?.error || '';