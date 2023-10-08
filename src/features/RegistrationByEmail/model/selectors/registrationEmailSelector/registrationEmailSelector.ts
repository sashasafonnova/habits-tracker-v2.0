import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const registrationEmailSelector = (state: StateSchema) => state?.registration?.email || '';