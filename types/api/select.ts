import { CollectionValue, QueryableCollection, QueryableProperty } from './helper';
import { DataBase } from '../database';

// Recursive selection tree
type SelectTree< T > = boolean | {
    [ K in keyof T ]?:
        T[ K ] extends QueryableProperty
            ? boolean
            : NonNullable< T[ K ] > extends Record< string, any >
                ? SelectTree< NonNullable< T[ K ] > >
                : never;
};

// Query select type defining selection trees for each collection
export type QuerySelect = {
    [ K in keyof DataBase & QueryableCollection ]?: SelectTree< CollectionValue< DataBase[ K ] > >;
};
