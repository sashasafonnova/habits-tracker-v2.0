import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const fetchErrorSelector = (state: StateSchema) => state?.tracksList?.fetchError || undefined;