import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const profileExistStatusSelector = (state: StateSchema) => state?.trackProfile?.existStatus || 'exist';