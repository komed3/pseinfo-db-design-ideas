import { OneOrMany } from './abstract';
import { NumberValue, Value } from './value';

export type NumberProperty = OneOrMany< NumberValue >;

export type Property = OneOrMany< Value >;

export type PropertyGroup< P extends string > = {
    [ K in P ]?: NumberProperty | Property;
};
