import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const loginErrorsSelector = (state: StateSchema) => state?.login?.validateErrors || {};