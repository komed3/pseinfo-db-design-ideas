import { ArrayProperty, PrimitiveProperty, RangeProperty, SingleProperty } from '../abstract/property';
import { Primitive } from '../abstract/utils';
import { QueryableProperty } from './helper';

// Basic operators
type BasicOperators< T > = {
    $exists?: boolean;
    $eq?: T;
    $ne?: T;
    $in?: T[];
    $notIn?: T[];
};

// Special operators (linked to appropriate types)
type BooleanOperators = BasicOperators< boolean >;

type NumberOperators< T extends number > = BasicOperators< T > & {
    $gt?: T;
    $gte?: T;
    $lt?: T;
    $lte?: T;
    $between?: [ T, T ];
    $notBetween?: [ T, T ];
};

type StringOperators< T extends string > = BasicOperators< T > & {
    $regex?: T | RegExp;
    $startsWith?: T;
    $endsWith?: T;
    $contains?: T;
    $length?: NumberOperators< number >;
};

type ArrayOperators< T, U > = BasicOperators< T > & {
    $size?: NumberOperators< number >;
    $includes?: U[];
    $excludes?: U[];
    $match?: FieldCondition< U >;
};

type ObjectOperators< T > = BasicOperators< T > & {
    $deep?: { [ K in keyof T ]?: FieldCondition< T[ K ] > };
    $has?: keyof T;
    $missing?: keyof T;
};

// Logical operators
type LogicalOperators< T > = {
    $and?: FieldCondition< T >[];
    $or?: FieldCondition< T >[];
    $nor?: FieldCondition< T >[];
    $xor?: FieldCondition< T >[];
    $not?: FieldCondition< T >;
};

// Main operator type (operators for appropriate types)
export type Operator< T > =
    T extends QueryableProperty ?
        T extends Primitive | PrimitiveProperty ?
            T extends boolean | PrimitiveProperty< boolean > ? BooleanOperators :
            T extends string | PrimitiveProperty< string > ? StringOperators< string > :
            T extends number | PrimitiveProperty< number > ? NumberOperators< number > :
            BasicOperators< T > :
        T extends SingleProperty ? NumberOperators< number > :
        T extends ArrayProperty ? ArrayOperators< T, number > :
        T extends RangeProperty ? NumberOperators< number > :
        never :
    T extends Array< infer U > ? ArrayOperators< T, U > :
    T extends Record< string, any > ? ObjectOperators< T > :
    never;

// Field operator mapping
export type FieldCondition< T > = | T | Operator< T > | LogicalOperators< T > | (
    T extends Record< string, any > ? { [ K in keyof T ]?: FieldCondition< T[ K ] > } : never
);
