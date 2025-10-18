import { QueryFilter } from './filter';
import { QueryableCollection } from './helper';
import { QuerySelect } from './select';
import { QuerySortOptions } from './sort';

// Root query type
export type Query = {
    $from: QueryableCollection[];
    $select: QuerySelect;
    $where?: QueryFilter;
    $join?: any; // not yet implemented
    $group?: any; // not yet implemented
    $sort?: QuerySortOptions;
    $offset?: number;
    $limit?: number;
    $options?: {
        resolveRefs?: boolean;
        resolveUnits?: boolean;
        units?: any; // not yet implemented
    };
};
