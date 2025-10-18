import { Property } from '../abstract/property';
import { Primitive } from '../abstract/utils';
import { DataBase } from '../database';

// Value type of a Collection
export type CollectionValue< T > = T extends Record< string, infer V > ? V : never;

// Queriable collection names
export type QueryableCollection = Exclude< keyof DataBase, 'units' | 'references' >;

// Queriable property types
export type QueryableProperty = Primitive | Property;

// Utility type to check if a selection object has at least one selected field
export type HasSelection< S > = {
    [ K in keyof S ]: S[ K ] extends false | undefined ? never : K
}[ keyof S ] extends never ? false : true;
