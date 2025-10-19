import { QueryFilter } from './filter';
import { QueryGroup } from './group';
import { QueryableCollection } from './helper';
import { QueryOptions } from './option';
import { QuerySelect } from './select';
import { QuerySort } from './sort';

// Root query type
export type Query = {
    $from: QueryableCollection[];
    $select: QuerySelect;
    $where?: QueryFilter;
    $group?: QueryGroup;
    $sort?: QuerySort;
    $limit?: number;
    $offset?: number;
    $options?: QueryOptions;
};
