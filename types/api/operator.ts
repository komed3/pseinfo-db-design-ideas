// Basic operators
type BasicOperators< T > = {
    $eq?: T;
    $ne?: T;
    $exists?: boolean;
    $in?: T[];
    $notIn?: T[];
};

// Special operators (linked to appropriate types)
type BooleanOperators< T extends boolean = boolean > = BasicOperators< T >;

type NumberOperators< T extends number = number > = BasicOperators< T > & {
    $gt?: T;
    $gte?: T;
    $lt?: T;
    $lte?: T;
    $between?: [ T, T ];
    $notBetween?: [ T, T ];
};

type StringOperators< T extends string = string > = BasicOperators< T > & {
    $regex?: string | RegExp;
    $startsWith?: string;
    $endsWith?: string;
    $contains?: string;
    $length?: NumberOperators< number >;
};

type ArrayOperators< T, U > = BasicOperators< T > & {
    $size?: NumberOperators< number >;
    $all?: U[];
    $some?: U[];
    $none?: U[];
    $includes?: U;
    $excludes?: U;
    $match?: FieldCondition< U >;
    $every?: FieldCondition< U >;
};

type ObjectOperators< T > = BasicOperators< T > & {
    $deep?: { [ K in keyof T ]?: FieldCondition< T[ K ] > };
    $has?: keyof T;
    $missing?: keyof T;
};

type LogicalOperators< T > = {
    $and?: FieldCondition< T >[];
    $or?: FieldCondition< T >[];
    $xor?: FieldCondition< T >[];
    $nor?: FieldCondition< T >[];
    $not?: FieldCondition< T >;
};

// Field operator mapping
export type FieldCondition< T > = | T | Operator< T > | LogicalOperators< T > | (
    T extends Record< string, any > ? { [ K in keyof T ]?: FieldCondition< T[ K ] > } : never
);
