import { CollectionQuery } from './query';

// Result type based on selection
export type QueryResult< T, Q extends CollectionQuery< T > > =
    Q extends { $select: infer S }
        ? S extends Array< infer Field >
            ? Field extends '*'
                ? T
                : Pick< T, Extract< Field, keyof T > >
            : T
        : T;

// Paginated result wrapper
export type PaginatedResult< T > = {
    data: T[];
    total: number;
    limit?: number;
    skip?: number;
    hasMore: boolean;
};

// Aggregation result
export type AggregationResult< T, Q extends CollectionQuery< T > > =
    Q extends { $aggregate: infer A }
        ? { [ K in keyof A ]: number }
        : never;
