import { OneOrMany } from './abstract';
import { ArrayValue, CoupledNumberValue, CoupledValue, NumberValue, PrimitiveValue, RangeValue, SingleValue, Value } from './value';

export type PrimitiveProperty = OneOrMany< PrimitiveValue >;

export type SingleProperty = OneOrMany< SingleValue >;

export type ArrayProperty = OneOrMany< ArrayValue >;

export type RangeProperty = OneOrMany< RangeValue >;

export type CoupledProperty = OneOrMany< CoupledValue >;

export type CoupledNumberProperty = OneOrMany< CoupledNumberValue >;

export type NumberProperty = OneOrMany< NumberValue >;

export type Property = OneOrMany< Value >;

export type NumberPropertyGroup< Properties extends string > = {
    [ P in Properties ]?: NumberProperty;
};

export type PropertyGroup< Properties extends string > = {
    [ P in Properties ]?: Property;
};

export type PropertyCollection< Groups extends string, Properties extends string > = {
    [ G in Groups ]?: NumberProperty | Property | NumberPropertyGroup< Properties > | PropertyGroup< Properties >;
};
