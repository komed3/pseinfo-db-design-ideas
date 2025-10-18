import { QueryableCollection } from './helper';
import { QuerySelect } from './select';
import { QuerySortOptions } from './sort';

// Root query type
export type Query = {
    $from: QueryableCollection[];
    $select: QuerySelect;
    $where?: any; // not yet implemented
    $sort?: QuerySortOptions;
    $limit?: number;
    $offset?: number;
};
