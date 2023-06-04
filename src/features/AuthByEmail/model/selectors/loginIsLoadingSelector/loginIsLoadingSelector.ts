import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const loginIsLoadingSelector = (state: StateSchema) => state?.login?.isLoading || false;