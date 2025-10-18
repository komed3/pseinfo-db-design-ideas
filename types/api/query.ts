import { QueryableCollection } from './helper';
import { QuerySortOptions } from './sort';

// Root query type
export type Query = {
    $from: QueryableCollection[];
    $select: any; // not yet implemented
    $where?: any; // not yet implemented
    $sort?: QuerySortOptions;
    $limit?: number;
    $offset?: number;
};
