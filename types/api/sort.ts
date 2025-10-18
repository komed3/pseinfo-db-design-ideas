import { QueryableCollection } from './path';

export const QuerySortFlag = [ 1, -1, 'asc', 'desc' ] as const;
export type QuerySortFlag = ( typeof QuerySortFlag )[ number ];

export type QuerySortOptions = [
    QueryableCollection, '', QuerySortFlag
][];
