export type Require< T, K extends keyof T > = T & Required< Pick< T, K > >;

export type RequireEither< T, A extends keyof T, B extends keyof T > =
    ( T & Required< Pick< T, A > > & Partial< Pick< T, B > > ) |
    ( T & Required< Pick< T, B > > & Partial< Pick< T, A > > );
