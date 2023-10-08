import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const registrationPasswordSelector = (state: StateSchema) => state?.registration?.password || '';