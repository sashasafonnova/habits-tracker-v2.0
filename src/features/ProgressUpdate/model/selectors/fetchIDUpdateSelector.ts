import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const fetchIDUpdateSelector = (state: StateSchema) => state?.progressUpdate?.fetchID || '';