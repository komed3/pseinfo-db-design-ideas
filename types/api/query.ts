import { QueryFilter } from './filter';
import { QueryableCollection } from './helper';
import { QuerySelect } from './select';
import { QuerySortOptions } from './sort';

// Root query type
export type Query = {
    $from: QueryableCollection[];
    $select: QuerySelect;
    $where?: QueryFilter;
    $sort?: QuerySortOptions;
    $join?: any; // not yet implemented
    $group?: any; // not yet implemented
    $limit?: number;
    $offset?: number;
};
