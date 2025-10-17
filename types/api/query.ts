import { QueryCondition } from './condition';
import { PaginationOptions, SortOptions } from './modifier';
import { FieldPaths, SelectOptions } from './select';

// Query for a single collection with all options
export type CollectionQuery< T > = QueryCondition< T > & PaginationOptions & SortOptions< T > & SelectOptions< T > & {
    $group?: ( keyof T )[];
    $aggregate?: {
        [ K in keyof T ]?: 'count' | 'sum' | 'avg' | 'min' | 'max';
    };
    $distinct?: keyof T;
};

// Extract collection names from DataBase type
type CollectionNames< DB > = {
    [ K in keyof DB ]: DB[ K ] extends Record< string, any > ? K : never;
}[ keyof DB ];

// Query for entire database
export type Query< DB > = {
    [ K in CollectionNames< DB > ]?: DB[ K ] extends Record< infer Key, infer Value >
        ? Key extends string
            ? CollectionQuery< Value > | {
                [ SubKey in Key ]?: CollectionQuery< Value >;
            }
            : never
        : never;
} & {
    $include?: CollectionNames< DB >[];
    $exclude?: CollectionNames< DB >[];
    $globalLimit?: number;
};

// Specialized queries
export type ElementQuery< EC > = {
    [ K in keyof EC ]?: CollectionQuery< EC[ K ] >;
} & CollectionQuery< EC extends Record< string, infer E > ? E : never >;

// Query builder interface for fluent API
export interface QueryBuilder< T > {
    where( condition: QueryCondition< T > ): QueryBuilder< T >;
    select< F extends FieldPaths< T > >( ...fields: F[] ): QueryBuilder< T >;
    exclude< F extends FieldPaths< T > >( ...fields: F[] ): QueryBuilder< T >;
    sort( options: SortOptions< T >[ '$sort' ] ): QueryBuilder< T >;
    limit( n: number ): QueryBuilder< T >;
    skip( n: number ): QueryBuilder< T >;
    distinct( field: keyof T ): QueryBuilder< T >;
    build(): CollectionQuery< T >;
}
