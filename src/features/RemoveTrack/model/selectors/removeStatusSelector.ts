import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const removeStatusSelector = (state: StateSchema) => state?.removeTrack?.removeStatus || 'notActive';