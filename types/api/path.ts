import { Property } from '../abstract/property';
import { Primitive } from '../abstract/utils';
import { DataBase } from '../database';

export type QueryableCollection = Exclude< keyof DataBase, 'units' | 'references' >;

export type QueryableProperty = Primitive | Property;
