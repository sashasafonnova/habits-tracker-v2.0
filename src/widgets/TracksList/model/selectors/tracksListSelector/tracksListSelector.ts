import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const tracksListSelector = (state: StateSchema) => state?.tracksList?.tracksList || null;