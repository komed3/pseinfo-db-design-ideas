import { RequireAtLeastOne, StrictSubset } from './abstract';
import { FormId } from './forms';
import { RefId } from './references';
import { Uncertainty } from './uncertainty';
import { PhysicalDimension, UnitId } from './units';

export type ValueOrigin =
    'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental' | 'literature' |
    'recommended' | 'critical' | 'standard' | 'extrapolated' | 'interpolated';

export type ValueType = 'single' | 'array' | 'range' | 'coupled';

interface ConditionValue {
  value: number;
  unit_ref?: UnitId;
  uncertainty?: Uncertainty;
  note?: string;
}

type Conditions = Partial< Record< PhysicalDimension, ConditionValue | ConditionValue[] > >;

interface BaseFields< T extends ValueType > {
    type: T;
    origin?: ValueOrigin;
    form_refs?: FormId[];
    uncertainty?: Uncertainty;
    conditions?: Conditions;
    references?: RefId[];
    note?: string;
}

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

export type SingleValue = BaseFields< 'single' > & StrictSubset< ValueFields, 'value', 'unit_ref' >;

export type ArrayValue = BaseFields< 'array' > & StrictSubset< ValueFields, 'values', 'unit_ref' >;

export type RangeValue = BaseFields< 'range' > & StrictSubset< ValueFields, 'value' | 'range', 'unit_ref' >;

export type CoupledValue = BaseFields< 'coupled' > & {
    properties: Partial< Record< PhysicalDimension, SingleValue | ArrayValue | RangeValue > >
};
