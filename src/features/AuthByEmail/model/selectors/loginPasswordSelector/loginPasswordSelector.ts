import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const loginPasswordSelector = (state: StateSchema) => state?.login?.password || '';