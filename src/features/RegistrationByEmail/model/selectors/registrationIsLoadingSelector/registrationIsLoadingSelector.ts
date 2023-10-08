import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const registrationIsLoadingSelector = (state: StateSchema) => state?.registration?.isLoading || false;