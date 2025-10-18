import { QueryableCollection } from './helper';
import { QuerySortOptions } from './sort';

export type Query = {
    $from: QueryableCollection[];
    $select: any; // not yet implemented
    $where?: any; // not yet implemented
    $sort?: QuerySortOptions;
    $limit?: number;
    $offset?: number;
};
