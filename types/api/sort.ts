import { QueryableCollection } from './helper';
import { CollectionPaths } from './path';

// Sort flags
export const QuerySortFlag = [ 1, -1, 'asc', 'desc' ] as const;
export type QuerySortFlag = ( typeof QuerySortFlag )[ number ];

// Sort options
export type QuerySortOptions = {
    [ K in QueryableCollection & string ]:
        [ K, CollectionPaths[ K ], QuerySortFlag ];
}[ QueryableCollection & string ][];
