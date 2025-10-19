import { QueryFilter } from './filter';
import { QueryGroupOptions } from './group';
import { QueryableCollection } from './helper';
import { QueryOptions } from './option';
import { QuerySelect } from './select';
import { QuerySortOptions } from './sort';

// Root query type
export type Query = {
    $from: QueryableCollection[];
    $select: QuerySelect;
    $where?: QueryFilter;
    $group?: QueryGroupOptions;
    $sort?: QuerySortOptions;
    $offset?: number;
    $limit?: number;
    $options?: QueryOptions;
};
