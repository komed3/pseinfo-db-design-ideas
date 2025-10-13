/**
 * Complex Physical Values
 */

import { Primitive, RequireAtLeastOne, StrictSubset } from './abstract';
import { FormId } from './form';
import { RefId } from './reference';
import { Uncertainty } from './uncertainty';
import { PhysicalQuantity, UnitId } from './unit';

// Type of value
export type ValueType = 'primitive' | 'single' | 'array' | 'range' | 'coupled';

// Value confidence / origin of the value
export type ValueConfidence = 'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental';

// Value under specific conditions
interface ConditionValue {
    value: number;
    unit_ref?: UnitId;
    uncertainty?: Uncertainty;
    note?: string;
}

type Conditions = Partial< Record< PhysicalQuantity, ConditionValue[] > >;

// Base fields for all value types
interface BaseFields< T extends ValueType > {
    type: T;
    confidence?: ValueConfidence;
    form_refs?: FormId[];
    uncertainty?: Uncertainty;
    conditions?: Conditions;
    references?: RefId[];
    note?: string;
}

// Fields specific to value types
interface ValueFields {
    value?: number;
    values?: number[];
    range?: RequireAtLeastOne< Record< 'lower' | 'upper', {
        value: number;
        uncertainty?: Uncertainty;
        inclusive?: boolean;
    } > >;
    unit_ref?: UnitId;
}

// Primitive value type
export type PrimitiveValue = BaseFields< 'primitive' > & { value: Primitive };

// Single value type
export type SingleValue = BaseFields< 'single' > & StrictSubset< ValueFields, 'value', 'unit_ref' >;

// Array of values type
export type ArrayValue = BaseFields< 'array' > & StrictSubset< ValueFields, 'values', 'unit_ref' >;

// Range of values type
export type RangeValue = BaseFields< 'range' > & StrictSubset< ValueFields, 'range', 'value' | 'unit_ref' >;

// Coupled values type (e.g., multiple related properties)
export type CoupledValue = BaseFields< 'coupled' > & {
    properties: RequireAtLeastOne< Record< PhysicalQuantity,
        PrimitiveValue | SingleValue | ArrayValue | RangeValue
    > >
};

// Coupled number values type (e.g., multiple related numeric properties)
export type CoupledNumberValue = BaseFields< 'coupled' > & {
    properties: RequireAtLeastOne< Record< PhysicalQuantity,
        SingleValue | ArrayValue | RangeValue
    > >
};

// Union type for all numeric value types
export type NumberValue = SingleValue | ArrayValue | RangeValue | CoupledNumberValue;

// Union type for all value types
export type Value = NumberValue | PrimitiveValue | CoupledValue;
