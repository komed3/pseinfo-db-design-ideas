import { HasSelection, CollectionValue, QueryableCollection } from './helper';
import { Query } from './query';
import { ReferenceCollection } from '../abstract/reference';
import { UnitCollection } from '../abstract/unit';
import { DeepPartial } from '../abstract/utils';
import { DataBase } from '../database';

// Result type definitions for queries
type FieldWithSelection< T, S > = NonNullable< T > extends readonly any[]
    ? NonNullable< T >
    : string extends keyof NonNullable< T >
        ? Record< string, SelectedResult< CollectionValue< NonNullable< T > >, S > >
        : SelectedResult< NonNullable< T >, S >;

type FieldDefault< T > = NonNullable< T > extends readonly any[]
    ? NonNullable< T >
    : string extends keyof NonNullable< T >
        ? Record< string, SelectedResult< CollectionValue< NonNullable< T > >, true > >
        : NonNullable< T >;

// Main selected result type
type SelectedResult< T, S > =
    S extends true ? T :
    S extends false | undefined ? never :
    S extends Record< string | number, any > ? (
        HasSelection< S > extends true ? {
            [ K in keyof S & keyof T as S[ K ] extends false | undefined ? never : K ]:
                FieldWithSelection< T[ K ], S[ K ] >;
        } : {
            [ K in keyof T as K extends keyof S ? ( S[ K ] extends false ? never : K ) : K ]:
                K extends keyof S ? FieldWithSelection< T[ K ], S[ K ] > : FieldDefault< T[ K ] >;
        }
    ) : never;

// Result type for the $select part of a query
type QuerySelectResult< S extends { [ k: string ]: any } > = {
    [ C in keyof S & QueryableCollection ]: S[ C ] extends true
        ? Record< string, DeepPartial< CollectionValue< DataBase[ C ] > > >
        : S[ C ] extends Record< string, any >
            ? Record< string, SelectedResult< DeepPartial< CollectionValue< DataBase[ C ] > >, S[ C ] > >
            : never;
};

// Final query result type
export type QueryResult< Q extends Query > = {
    query: Q;
    result: {
        data: QuerySelectResult< Q[ '$select' ] >;
        references: ReferenceCollection;
        units: DeepPartial< UnitCollection >;
    };
    metadata: {
        total: number;
        limit: number;
        hasMore: boolean;
        queryTime: Date;
        cachedTime: Date;
        execTime: number;
    };
};
