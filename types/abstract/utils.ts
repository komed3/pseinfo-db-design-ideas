// Primitive types in TypeScript
export type Primitive = string | number | boolean | symbol | null | undefined;

// Pick properties K from T, making them optional
export type ExtractFrom< T, K extends keyof T > = Partial< Pick< T, K > >;

// Pick properties K from T, making them required
export type RequireFrom< T, K extends keyof T > = Required< Pick< T, K > >;

// Require at least one property from K, all other properties remain unchanged
export type RequireAtLeastOne< T extends object, K extends keyof T = keyof T > =
    Pick< T, Exclude< keyof T, K > > &
    { [ O in K ]: RequireFrom< T, O > & ExtractFrom< T, Exclude< K, O > > }[ K ];
