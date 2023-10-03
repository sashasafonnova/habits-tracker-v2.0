import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { CreateTrackStatuses } from '../../types/createTrack';

export const trackCreateStatusSelector = (state: StateSchema) => state?.createTrack?.createStatus || CreateTrackStatuses.AWAIT;