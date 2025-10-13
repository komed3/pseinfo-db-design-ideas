/**
 * Abstract Property Types
 */

import { LiteralUnion, OneOrMany, Primitive } from './abstract';
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
export type Group< T extends Record< string, Property | Primitive | undefined > > = T;
export type Distinct< T > = T;

// Helper types
export type LangGroup = Group< Record< LiteralUnion< 'en' | 'la' | 'de' | 'fr' >, Distinct< string > > >;

// Generic property collection mapper
export type MapPropertyDefinition< T > = { [ K in keyof T ]?: 
    T[ K ] extends Distinct< infer D > ? Distinct< D > :
    T[ K ] extends Single< infer P > ? P :
    T[ K ] extends Group< infer G > ? { [ GK in keyof G ]?: G[ GK ] } :
    T[ K ] extends NumberProperty | PrimitiveProperty | Property ? T[ K ] :
    never };
