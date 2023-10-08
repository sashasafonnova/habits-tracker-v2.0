import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const registrationFirstNameSelector = (state: StateSchema) => state?.registration?.firstName || '';