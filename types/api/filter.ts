import { CollectionValue, QueryableCollection } from './helper';
import { FieldCondition } from './operator';
import { DataBase } from '../database';

// Type for filtering the database
export type QueryFilter = {
    [ K in keyof DataBase & QueryableCollection ]?: FieldCondition< CollectionValue< DataBase[ K ] > >;
};
