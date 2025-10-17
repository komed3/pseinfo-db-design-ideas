import { ArrayOperators, ComparisonOperators, LogicalOperators } from './operator';

// Query condition for a single field
export type FieldCondition< T > =
    | T  // Direct value match
    | true  // Include field (for selection)
    | ComparisonOperators< T >
    | ArrayOperators< T >
    | ( T extends object ? QueryCondition< T > : never );

// Complete query condition for a type
export type QueryCondition< T > = {
    [ K in keyof T ]?: FieldCondition< T[ K ] >;
} & LogicalOperators< T >;
