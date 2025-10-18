import { DataBasePaths } from './path';

// Possible sorting flags for queries
export const QuerySortFlags = [ 1, -1, 'asc', 'desc' ] as const;
export type QuerySortFlags = ( typeof QuerySortFlags )[ number ];

// Type representing sorting options in a query
export type QuerySortOptions = {
    [ P in DataBasePaths ]?: QuerySortFlags;
};
