// Sort direction types
export const SortDirection = [ 1, -1, 'asc', 'desc' ] as const;
export type SortDirection = ( typeof SortDirection )[ number ];

// Pagination options
export type PaginationOptions = {
    $limit?: number;
    $skip?: number;
    $offset?: number;
};

// Sort options (only allow sortable fields)
export type SortOptions< T > = {
    $sort?: {
        [ K in keyof T as T[ K ] extends Function ? never : K ]?: SortDirection;
    };
};
