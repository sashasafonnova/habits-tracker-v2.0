import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const registrationErrorsSelector = (state: StateSchema) => state?.registration?.validateErrors || {};