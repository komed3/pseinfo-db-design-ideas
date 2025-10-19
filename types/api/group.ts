import { QueryFilter } from './filter';
import { PathWalker } from './path';

// Aggregation functions for grouping
export const QueryAggregationFn = [ 'count', 'max', 'min', 'sum', 'avg' ] as const;
export type QueryAggregationFn = ( typeof QueryAggregationFn )[ number ];

// Type for grouping options in queries
export type QueryGroupOptions = {
    groupBy: PathWalker;
    aggregate?: PathWalker< QueryAggregationFn >;
    having?: QueryFilter;
};
