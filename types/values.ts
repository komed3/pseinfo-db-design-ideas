/**
 * Complex Physical Values
 */

import { RequireAtLeastOne, StrictSubset } from './abstract';
import { FormId } from './forms';
import { RefId } from './references';
import { Uncertainty } from './uncertainty';
import { PhysicalDimension, UnitId } from './units';

// Origin of the value
export type ValueOrigin = 'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental';

// Type of value
export type ValueType = 'single' | 'array' | 'range' | 'coupled';

// Value under specific conditions
interface ConditionValue {
  value: number;
  unit_ref?: UnitId;
  uncertainty?: Uncertainty;
  note?: string;
}

type Conditions = Partial< Record< PhysicalDimension, ConditionValue | ConditionValue[] > >;

// Base fields for all value types
interface BaseFields< T extends ValueType > {
    type: T;
    origin?: ValueOrigin;
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

// Single value type
export type SingleValue = BaseFields< 'single' > & StrictSubset< ValueFields, 'value', 'unit_ref' >;

// Array of values type
export type ArrayValue = BaseFields< 'array' > & StrictSubset< ValueFields, 'values', 'unit_ref' >;

// Range of values type
export type RangeValue = BaseFields< 'range' > & StrictSubset< ValueFields, 'value' | 'range', 'unit_ref' >;

// Coupled values type (e.g., multiple related properties)
export type CoupledValue = BaseFields< 'coupled' > & {
    properties: Partial< Record< PhysicalDimension, SingleValue | ArrayValue | RangeValue > >
};

// Union type for all value types
export type Value = SingleValue | ArrayValue | RangeValue | CoupledValue;
