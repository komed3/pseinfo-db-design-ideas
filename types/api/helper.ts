import { Property } from '../abstract/property';
import { Primitive } from '../abstract/utils';
import { DataBase } from '../database';

// Value type of a Collection
export type CollectionValue< T > = T extends Record< string, infer V > ? V : never;

// Queriable collection names
export type QueryableCollection = Exclude< keyof DataBase, 'units' | 'references' >;

// Queriable property types
export type QueryableProperty = Primitive | Property;
