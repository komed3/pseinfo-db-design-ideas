import { Primitive } from '../abstract/utils';

// Extract all possible field paths from a type
export type FieldPaths< T, Prefix extends string = '' > = T extends Primitive | Date | Function
    ? Prefix
    : T extends Array< infer U >
    ? Prefix | FieldPaths< U, `${Prefix}.*` >
    : {
        [ K in keyof T ]-?: K extends string
            ? Prefix extends ''
                ? K | FieldPaths< T[ K ], K >
                : `${Prefix}.${K}` | FieldPaths< T[ K ], `${Prefix}.${K}` >
            : never;
    }[ keyof T ];

// Field selection options
export type SelectOptions< T > = {
    $select?: ( FieldPaths< T > | '*' )[];
    $exclude?: FieldPaths< T >[];
};
