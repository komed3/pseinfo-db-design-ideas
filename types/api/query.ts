import { QueryCondition } from './condition';
import { PaginationOptions, SortOptions } from './modifier';
import { FieldPaths, SelectOptions } from './select';
import { DataBase } from '../database';
import { ElementCollection } from '../element';

// Query for a single collection with all options
export type CollectionQuery< T > = QueryCondition< T > & PaginationOptions & SortOptions< T > & SelectOptions< T > & {
    $group?: ( keyof T )[];
    $aggregate?: {
        [ K in keyof T ]?: 'count' | 'sum' | 'avg' | 'min' | 'max';
    };
    $distinct?: keyof T;
};

// Extract collection names from DataBase type
type CollectionNames< C > = {
    [ K in keyof C ]: C[ K ] extends Record< string, any > ? K : never;
}[ keyof C ];

// Query for entire database
export type Query< C = DataBase > = {
    [ K in CollectionNames< C > ]?: C[ K ] extends Record< infer K, infer V >
        ? K extends string
            ? CollectionQuery< V > | {
                [ S in K ]?: CollectionQuery< V >;
            }
            : never
        : never;
} & {
    $include?: CollectionNames< C >[];
    $exclude?: CollectionNames< C >[];
    $globalLimit?: number;
};

// Specialized queries
export type ElementQuery = {
    [ K in keyof ElementCollection ]?: CollectionQuery< ElementCollection[ K ] >;
} & CollectionQuery< ElementCollection extends Record< string, infer E > ? E : never >;

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
