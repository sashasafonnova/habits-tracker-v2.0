import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const tracksErrorSelector = (state: StateSchema) => state?.userTrack?.error || '';