import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const profileDataSelector = (state: StateSchema) => state?.trackProfile?.profileData || {};