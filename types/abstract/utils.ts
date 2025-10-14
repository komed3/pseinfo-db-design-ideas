// Primitive types in TypeScript
export type Primitive = string | number | boolean | symbol | null | undefined;

// Type that can be a single instance of T or an array of T
export type OneOrMany< T > = T | T[];

// Pick properties K from T, making them optional
export type ExtractFrom< T, K extends keyof T > = Partial< Pick< T, K > >;

// Pick properties K from T, making them required
export type RequireFrom< T, K extends keyof T > = Required< Pick< T, K > >;

// Require properties R and make properties O optional, all other properties remain unchanged
export type StrictSubset< T extends object, R extends keyof T, O extends keyof T > = RequireFrom< T, R > & ExtractFrom< T, O >;

// Require exactly one property from A or B (XOR), all other properties remain unchanged
export type RequireExactlyOne< T, K extends keyof T = keyof T > =
    { [ P in K ]: RequireFrom< T, P > & { [ Q in Exclude< K, P > ]?: never } & Omit< T, K > }[ K ];

// Require at least one property from K, all other properties remain unchanged
export type RequireAtLeastOne< T extends object, K extends keyof T = keyof T > =
    Pick< T, Exclude< keyof T, K > > &
    { [ O in K ]: RequireFrom< T, O > & ExtractFrom< T, Exclude< K, O > > }[ K ];
