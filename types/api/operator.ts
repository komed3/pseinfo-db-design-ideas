// Comparison operators for primitive values
type ComparisonOperators< T > = {
    exists?: boolean;
    eq?: T;
    ne?: T;
    gt?: T extends number ? T : never;
    gte?: T extends number ? T : never;
    lt?: T extends number ? T : never;
    lte?: T extends number ? T : never;
    between?: T extends number ? [ T, T ] : never;
    notBetween?: T extends number ? [ T, T ] : never;
    in?: T[];
    notIn?: T[];
    regex?: T extends string ? string : never;
    regexFlags?: T extends string ? string : never;
};

// Logical operators for combining conditions
type LogicalOperators< T > = {
    $and?: QueryCondition< T >[];
    $or?: QueryCondition< T >[];
    $not?: QueryCondition< T >;
};

// Array operators
type ArrayOperators< T > = {
    all?: T extends Array< infer U > ? U[] : never;
    match?: T extends Array< infer U > ? QueryCondition< U > : never;
    size?: T extends Array< any > ? number : never;
};
