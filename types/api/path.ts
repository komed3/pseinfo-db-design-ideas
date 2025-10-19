import { CollectionValue, QueryableCollection, QueryableProperty } from './helper';
import { DataBase } from '../database';

// Recursive type to get all possible paths in an object T
type Paths< T, Prev extends string = '' > = {
    [ K in keyof T & string ]:
        T[ K ] extends QueryableProperty
            ? ( Prev extends '' ? K : `${Prev}.${K}` )
            : NonNullable< T[ K ] > extends readonly any[]
                ? ( Prev extends '' ? K : `${Prev}.${K}` )
                : NonNullable< T[ K ] > extends Record< string, any >
                    ? Paths< NonNullable< T[ K ] >, Prev extends '' ? K : `${Prev}.${K}` >
                    : never;
}[ keyof T & string ];

// All possible paths for each collection in the database
export type CollectionPaths = {
    [ K in QueryableCollection & string ]: Paths< CollectionValue< DataBase[ K ] > >;
};

// Type to walk paths with an additional type T appended
export type PathWalker< T extends any = never > = {
    [ K in QueryableCollection & string ]:
        T extends readonly any[]
            ? [ K, CollectionPaths[ K ], ...T ]
            : [ K, CollectionPaths[ K ], T ];
}[ QueryableCollection & string ][]
