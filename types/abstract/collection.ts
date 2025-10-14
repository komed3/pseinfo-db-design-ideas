import { Property } from './property';

// Utility types
export type Single< T extends Property > = T;
export type Distinct< T = any > = T;
export type Group< T extends Record< string, Single< Property > | Distinct< any > > > = T;

// Generic collection mapper
export type Collection< T > = { [ K in keyof T ]:
    T[ K ] extends Single< infer P > ? P :
    T[ K ] extends Distinct< infer D > ? Distinct< D > :
    T[ K ] extends Group< infer G > ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
    T[ K ] extends Property ? T[ K ] :
    never };
