/**
 * Abstract Utility Types
 */

// Primitive types in TypeScript
export type Primitive = string | number | boolean | symbol | null | undefined;

// Create a type that is either T or a literal union of U
export type LiteralUnion< T extends U, U = string > = T | ( U & { _?: never } );

// Get the union of all property values in T
export type ValueOf< T > = T[ keyof T ];

// Type that can be a single instance of T or an array of T
export type OneOrMany< T > = T | T[];

// Pick properties K from T, making them optional
export type ExtractFrom< T, K extends keyof T > = Partial< Pick< T, K > >;

// Pick properties K from T, making them required
export type RequireFrom< T, K extends keyof T > = Required< Pick< T, K > >;

// Require at least one property from K, all other properties remain unchanged
export type RequireAtLeastOne< T extends object, K extends keyof T = keyof T > =
    Pick< T, Exclude< keyof T, K > > &
    { [ O in K ]: RequireFrom< T, O > & ExtractFrom< T, Exclude< K, O > > }[ K ];

// Require exactly one property from K, all other properties remain unchanged
export type RequireOnlyOne< T extends object, K extends keyof T = keyof T > =
    { [ P in K ]: RequireFrom< T, P > & Partial< Record< Exclude< K, P >, undefined > > }[ K ] &
    Omit< T, K >;

// Require exactly one property from A or B (XOR), all other properties remain unchanged
export type RequireExactlyOne< T, K extends keyof T = keyof T > =
    { [ P in K ]: RequireFrom< T, P > & { [ Q in Exclude< K, P > ]?: never } & Omit< T, K > }[ K ];

// Make all properties in T required, except for the properties in K which are optional
export type PartialFrom< T, K extends keyof T > = Omit< T, K > & ExtractFrom< T, K >;

// Make all properties in T optional, except for the properties in K which are required
export type PartialExcept< T, K extends keyof T > = Partial< T > & Pick< T, K >;

// Require properties R and make properties O optional, all other properties remain unchanged
export type StrictSubset< T extends object, R extends keyof T, O extends keyof T > = RequireFrom< T, R > & ExtractFrom< T, O >;

// Exclude properties from T that are also in U, making them never
export type Without< T, U > = { [ P in Exclude< keyof T, keyof U > ]?: never };

// Exclude properties from T that are also in U
export type MergeExclusive< T, U > = ( T | U ) extends object ? ( Without< T, U > & U ) | ( Without< U, T > & T ) : T | U;

// Recursively make all properties in T optional
export type DeepPartial< T > = { [ P in keyof T ]?: T[ P ] extends object ? DeepPartial< T[ P ] > : T[ P ] };

// Recursively make all properties in T required
export type DeepRequired< T > = { [ P in keyof T ]-?: T[ P ] extends object ? DeepRequired< T[ P ] > : T[ P ] };

// Recursively merge two types T and U
export type DeepMerge< T, U > = { [ K in keyof ( T & U ) ]: K extends keyof U
    ? K extends keyof T ? T[ K ] extends object ? U[ K ] extends object ? DeepMerge< T[ K ], U[ K ] > : U[ K ] : U[ K ] : U[ K ]
    : K extends keyof T ? T[ K ] : never };
