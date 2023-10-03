import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const createTrackErrorsSelector = (state: StateSchema) => state?.createTrack?.validateErrors || {};