import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const authDataSelector = (state: StateSchema) => state.user?.authData || undefined;