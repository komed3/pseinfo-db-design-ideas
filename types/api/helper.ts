import { Property } from '../abstract/property';
import { Primitive } from '../abstract/utils';
import { DataBase } from '../database';

// Check if a Select-Object S contains any `true` value
export type HasTrue< S > = Extract< S[ keyof S & ( string | number ) ], true > extends never ? false : true;

// Value type of a Collection
export type CollectionValue< T > = T extends Record< string, infer V > ? V : never;

// Queriable collection names
export type QueryableCollection = Exclude< keyof DataBase, 'units' | 'references' >;

// Queriable property types
export type QueryableProperty = Primitive | Property;
