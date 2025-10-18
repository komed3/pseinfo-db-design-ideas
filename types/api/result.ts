import { Query } from './query';

// Result type for a query
export type QueryResult< Q extends Query > = {
    query: Q;
    result: any; // not yet implemented
    references: any; // not yet implemented
    units: any; // not yet implemented
    metadata: {
        total: number;
        limit: number;
        hasMore: boolean;
        queryTime: Date;
        cachedTime: Date;
        execTime: number;
    };
};
