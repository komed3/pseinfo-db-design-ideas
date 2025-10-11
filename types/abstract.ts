/**
 * Abstract Utility Types
 */

// Primitive types in TypeScript
export type Primitive = string | number | boolean | symbol | null | undefined;

// Create a type that is either T or a literal union of U
export type LiteralUnion< T extends U, U = string > = T | ( U & { _?: never } );

// Get the union of the values of an object type T
export type ValueOf< T > = T[ keyof T ];

// Require at least one property from T
export type RequireAtLeastOne< T, U = { [ K in keyof T ]: Pick< T, K > } > = Partial< T > & U[ keyof U ];

// Require exactly one property from T
export type RequireOnlyOne< T, U = { [ K in keyof T ]: Pick< T, K > } > = Pick< T, Exclude< keyof T, keyof U > > &
    U[ keyof U ] & Partial< Record< Exclude< keyof T, keyof U >, undefined > >;

// Pick some properties from T, those in K
export type PickOptional< T, K extends keyof T > = Partial< Pick< T, K > >;

// Make some properties from T optional, those in K
export type PartialFrom< T, K extends keyof T > = Omit< T, K > & PickOptional< T, K >;

// Make all properties from T optional, except those in K
export type PartialExcept< T, K extends keyof T > = Partial< T > & Pick< T, K >;

// Make some properties from T optional, those in K, and merge with U
export type MergeOptional< T, K extends keyof T, U > = PartialFrom< T, K > & U;

// Require all properties from T, but at least some from K
export type RequireSome< T, K extends keyof T > = PartialFrom< T, K > & { [ P in K ]-?: T[ P ] };

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
