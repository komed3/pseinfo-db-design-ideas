import { DataBasePaths } from './path';

// Possible sorting flags for queries
export const QuerySortFlag = [ 1, -1, 'asc', 'desc' ] as const;
export type QuerySortFlag = ( typeof QuerySortFlag )[ number ];

// Type representing sorting options in a query
export type QuerySortOptions = {
    [ P in DataBasePaths ]?: QuerySortFlag;
};
