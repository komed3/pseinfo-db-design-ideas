import { Property } from '../abstract/property';
import { Primitive } from '../abstract/utils';
import { DataBase } from '../database';

type CollectionValue<T> =
    T extends Record<string, infer V> ? V : never;

export type QueryableCollection = Exclude< keyof DataBase, 'units' | 'references' >;

export type QueryableProperty = Primitive | Property;

type Paths< T, Prev extends string = '' > = {
    [ K in keyof T & string ]:
        T[ K ] extends QueryableProperty
            ? ( Prev extends '' ? K : `${Prev}.${K}` )
            : NonNullable< T[ K ] > extends Record< string, any >
                ? Paths< NonNullable< T[ K ] >, Prev extends '' ? K : `${Prev}.${K}` >
                : never
}[ keyof T & string ];

type CollectionPaths = {
    [K in keyof DataBase & string]: Paths<CollectionValue<DataBase[K]>>;
};

type SortDirection = 'asc' | 'desc';

type SortOptions = {
    [K in keyof DataBase & string]:
        [K, CollectionPaths[K], SortDirection];
}[keyof DataBase & string][];

const test: SortOptions = [
    [ 'elements', 'atomics.mass.stdAtomicWeight', 'asc' ],
    [ 'elements', 'descriptive.properties.length', 'asc' ]
];

