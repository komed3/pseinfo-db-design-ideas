import { PathWalker } from './path';

// Sort flags
export const QuerySortFlag = [ 1, -1, 'asc', 'desc' ] as const;
export type QuerySortFlag = ( typeof QuerySortFlag )[ number ];

// Sort options
export type QuerySort = PathWalker< QuerySortFlag >;
