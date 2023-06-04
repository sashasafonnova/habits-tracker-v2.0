import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const loginEmailSelector = (state: StateSchema) => state?.login?.email || '';