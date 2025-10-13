/**
 * Abstract Property Types
 */

import { OneOrMany } from './abstract';
import { ArrayValue, CoupledNumberValue, CoupledValue, PrimitiveValue, RangeValue, SingleValue } from './value';

// Basic property types
export type PrimitiveProperty = OneOrMany< PrimitiveValue >;
export type SingleProperty = OneOrMany< SingleValue >;
export type ArrayProperty = OneOrMany< ArrayValue >;
export type RangeProperty = OneOrMany< RangeValue >;
export type CoupledNumberProperty = OneOrMany< CoupledNumberValue >;
export type CoupledProperty = OneOrMany< CoupledValue >;
export type NumberProperty = OneOrMany< SingleProperty | ArrayProperty | RangeProperty | CoupledNumberProperty >;
export type Property = OneOrMany< NumberProperty | PrimitiveProperty | CoupledProperty >;

// Grouped property types
export type NumberPropertyGroup< Names extends string > = { [ K in Names ]?: NumberProperty };
export type PropertyGroup< Names extends string > = { [ K in Names ]?: Property };

// Utility types
export type Single< T extends Property > = T;
export type Group< T extends Record< string, Property | undefined > > = T;

// Generic property collection mapper
export type MapPropertyDefinition< T > = {
    [ K in keyof T ]?: T[ K ] extends NumberProperty | PrimitiveProperty | Property
        ? T[ K ]
        : T[ K ] extends Record< string, any >
        ? T[ K ] extends { [ key: string ]: NumberProperty | undefined }
            ? NumberPropertyGroup< keyof T[ K ] & string >
            : T[ K ] extends { [ key: string ]: Property | undefined }
            ? PropertyGroup< keyof T[ K ] & string >
            : never
        : never;
};
