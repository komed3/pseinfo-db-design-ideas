// Pick properties K from T, making them required
export type RequireFrom< T, K extends keyof T > = Required< Pick< T, K > >;
