import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const profileErrorSelector = (state: StateSchema) => state?.trackProfile?.error || '';