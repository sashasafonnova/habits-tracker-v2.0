import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const loginErrorSelector = (state: StateSchema) => state?.login?.error;