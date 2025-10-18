import { QuerySortOptions } from './sort';

export type Query = {
    $from: any;
    $select: any;
    $where: any;
    $sort?: QuerySortOptions;
    $limit?: number;
    $offset?: number;
};
