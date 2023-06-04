import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const tracksIsLoadingSelector = (state: StateSchema) => state?.fetchTracks?.isLoading || false;