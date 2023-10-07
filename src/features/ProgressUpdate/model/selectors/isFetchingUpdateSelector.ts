import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const isFetchingUpdateSelector = (state: StateSchema) => state?.progressUpdate?.isFetching || false;