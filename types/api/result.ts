import { DeepPartial } from '../abstract/utils';
import { Query } from './query';
import { DataBase } from '../database';

// Result type for a query
export type QueryResult< Q extends Query > = {
    query: Q;
    result: DeepPartial< DataBase >,
    metadata: {
        total: number;
        limit: number;
        hasMore: boolean;
        queryTime: DateTime;
        cachedTime: DateTime;
        execTime: number;
    };
};
