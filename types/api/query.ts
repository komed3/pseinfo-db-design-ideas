import { QuerySortOptions } from './sort';

export type Query = {
    $from: any; // not yet implemented
    $select: any; // not yet implemented
    $where?: any; // not yet implemented
    $sort?: QuerySortOptions;
    $limit?: number;
    $offset?: number;
};
