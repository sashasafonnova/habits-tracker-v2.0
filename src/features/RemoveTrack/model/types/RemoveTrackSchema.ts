export enum RemoveTrackStatuses {
   IS_DELETING = 'isDeleting',
   DELETED = 'deleted',
   NOT_ACTIVE = 'notActive',
   ERROR = 'error'
}

export interface RemoveTrackSchema {
   removeStatus: RemoveTrackStatuses,
   error?: string,
}