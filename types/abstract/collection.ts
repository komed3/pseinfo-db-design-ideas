import { Property } from './property';
import { LiteralUnion } from './utils';

// Utility types
export type Single< T extends Property > = T;
export type Distinct< T = any > = T;
export type Group< T extends Record< string, Single< Property > | Distinct< any > > > = T;

// Helper types
export type LangGroup< L extends string = 'en' > = Group< {
    [ K in LiteralUnion< L > ]: Distinct< string >;
} >;

export type FormGroup< T, L extends string = 'generic' > = Group< {
    [ K in LiteralUnion< L > ]: T;
} >;

// Generic collection mapper
export type Collection< T > = { [ K in keyof T ]:
    T[ K ] extends Single< infer P > ? P :
    T[ K ] extends Distinct< infer D > ? Distinct< D > :
    T[ K ] extends Group< infer G > ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
    T[ K ] extends Property ? T[ K ] :
    never };
