import { DeepPartial } from '../abstract/utils';
import { Query } from './query';
import { DataBase } from '../database';

// Result type for a query
export type QueryResult< Q extends Query > = {
    result: DeepPartial< DataBase >,
    metadata: {
        query: Q;
        total?: number;
        limit?: number;
        hasMore?: boolean;
        execTime?: number;
        cached?: boolean;
    };
};
