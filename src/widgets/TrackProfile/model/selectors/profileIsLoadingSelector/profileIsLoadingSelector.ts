import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const profileIsLoadingSelector = (state: StateSchema) => state?.trackProfile?.isLoading || false;